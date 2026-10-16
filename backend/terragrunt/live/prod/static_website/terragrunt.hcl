include "root" {
    path   = find_in_parent_folders("root.hcl")
    expose = true
}

locals {
    parent      = read_terragrunt_config(find_in_parent_folders("root.hcl")).locals
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

remote_state {
    backend = include.root.remote_state.backend
    config = merge(
        include.root.remote_state.config,
        {
            key = "${local.parent.prefix}/${local.environment}/${local.folder_name}/terraform.state"
        }
    )
}

terraform {
    source = "git::https://git@github.com/Capson12/blob-website.git//module/static-website"
}

generate "connectivity_dns" {
    path      = "connectivity_dns.tf"
    if_exists = "overwrite_terragrunt"
    contents  = <<EOF
provider "azurerm" {
  alias           = "connectivity"
  subscription_id = "${get_env("CONNECTIVITY_SUBSCRIPTION_ID")}"
  features {}
}
EOF
}

generate "connectivity_dns_override" {
        path      = "connectivity_dns_override.tf"
        if_exists = "overwrite_terragrunt"
        contents  = <<EOF
resource "azurerm_dns_cname_record" "this" {
    provider = azurerm.connectivity
}
EOF
}

inputs = {
    prefix              = "${local.parent.prefix}-prod"
    resource_group_name = dependency.rg.outputs.name
    location            = "eastus2"
    sku_size            = "Standard"

    custom_domain = {
        subdomain           = "www"
        zone_name           = "symtex.dev"
        resource_group_name = get_env("DNS_RESOURCE_GROUP_NAME")
    }
}