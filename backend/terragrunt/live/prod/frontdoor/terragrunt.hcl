include "root" {
    path = find_in_parent_folders("root.hcl")
    expose = true
}

locals {
    parent = read_terragrunt_config(find_in_parent_folders("root.hcl")).locals
    environment = basename(dirname(get_terragrunt_dir())) 
    folder_name = basename(get_terragrunt_dir())
}


dependency "shared_rg" {
    config_path = "../../shared/resource_group"

        mock_outputs = {
        name = "mock-resource-group"
    }
}

dependency "rg" {
    config_path = "../resource_group"

    mock_outputs_allowed_terraform_commands = ["validate", "plan", "init"]
    mock_outputs = {
        name = "mock-resource-group"
    }
}

dependency "storage" { 
    config_path = "../blob-site"
    mock_outputs_allowed_terraform_commands = ["validate", "plan", "init"]
    mock_outputs = {
          storage_output = "mock-storage-output"
      }
 }

dependency "domain" { 
    config_path = "../../shared/dns_domain"

 mock_outputs = {
          domain_output = "mock-domain-output"
      }
 }


remote_state {
    backend = include.root.remote_state.backend
    config  = merge(
        include.root.remote_state.config,
        {key = "${local.parent.prefix}/${local.environment}/${local.folder_name}/terraform.state"}
    ) 
}



terraform { source = "git::https://git@github.com/Capson12/blob-website.git//module/frontdoor" }

inputs = {
    # Resource group
    location                            = local.parent.location
    resource_group_name                 = dependency.rg.outputs.name

    # DNS record
    apex_cname_name                     = local.environment
    create_apex_alias                   = true
    additional_custom_domains           = [ { name = "www-domain", host_name = "www.domain.com", subdomain = "www" } ]
    dns_resource_group_name             = dependency.shared_rg.outputs.name
    
    # DNS (shared zone passed in)  
    dns_zone_name                       = local.parent.dns_domain
    dns_zone_id                         = dependency.domain.outputs.dns_zone_id

    # Front Door custom domain host
    fd_dns_zone_name                    = "symtex.dev"

    # Origin (blob storage)
    main_origin_host_name               = regex("^(?:https?://)?([^/]+)", dependency.storage.outputs.primary_web_endpoint)[0]

    # Naming
    main_profile_name                   = "${local.parent.prefix}-${local.environment}-profile"
    main_endpoint_name                  = "${local.parent.prefix}-${local.environment}-endpoint"
    main_origin_group_name              = "${local.parent.prefix}-${local.environment}-origin-group"
    main_origin_name                    = "${local.parent.prefix}-${local.environment}-origin"
    main_custom_domain_name             = "${local.parent.prefix}-${local.environment}-dn"
    main_route_name                     = "${local.parent.prefix}-${local.environment}-route"
    main_firewall_policy_name           = "smtxwebapp${local.environment}fwp"
    main_security_policy_name           = "${local.parent.prefix}-${local.environment}-scp"
    



}