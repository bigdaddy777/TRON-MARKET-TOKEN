module.exports = {
  networks: {
    development: {
      from: 'TGR33nnDGF3cTKgkz5Gu8C9RAfVFW7BoLN',
      privateKey: '',
      consume_user_resource_percent: 60,
      fee_limit: 600000000,
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "*" // Match any network id
    }
  }
}
