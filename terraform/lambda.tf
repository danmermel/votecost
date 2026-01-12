# cryptario
module "votecost" {
  source        = "./modules/apicall"
  function_name = "votecost"
  role          = aws_iam_role.votecostLambdaRole.arn
}


output "votecostFunctionUrl" {
  value = module.votecost.url
}