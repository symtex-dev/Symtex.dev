include "root" {
    path = find_in_parent_folders("root.hcl")
    expose = true
}

locals {
    parent = read_terragrunt_config(find_in_parent_folders("root.hcl")).locals
    environment = basename(dirname(get_terragrunt_dir())) 
    folder_name = basename(get_terragrunt_dir())
}

dependency "rg" {
    config_path = "../core/resource_group"

    mock_outputs_allowed_terraform_commands = ["validate", "plan", "init"]
    mock_outputs = {
        name = "mock-resource-group"
    }
}


dependency "dns_zone" {
    config_path = "../../shared/dns_domain"

    mock_outputs_allowed_terraform_commands = ["validate", "plan", "init"]
    mock_outputs = {
       custom_domain = {
        subdomain = "dev"
        zone_name = "mock.com"
        resource_group_name = "mock-resource-group"
        }
    }


}



remote_state {
    backend = include.root.remote_state.backend
    config  = merge(
        include.root.remote_state.config,
        {key = "${local.parent.prefix}/${local.environment}/${local.folder_name}/terraform.state"}
    ) 
}




terraform {
    source = "git::https://git@github.com/Capson12/blob-website.git//module/static-website"
}

inputs = {
    prefix                      = local.parent.prefix
    resource_group_name         = dependency.rg.outputs.name
    location                    = "eastus2"
    sku_size                    = "Standard"

    custom_domain = {
    subdomain           = "dev"
    zone_name           = dependency.dns_zone.outputs.dns_zone_name
    resource_group_name = dependency.dns_zone.outputs.resource_group_name
  }



}