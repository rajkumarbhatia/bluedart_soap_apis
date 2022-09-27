var soap = require('soap');

exports.generateSOAPRequest = async (url, params, action, functionName) => {

	return new Promise((resolve, reject) => {

	    try {

	      var args = params;
	      var wsdlOptions = {
	        envelopeKey: "env"
	      };
	      soap.createClient(url, wsdlOptions, function (err, client) {

	        if (err) {
	          console.log(err)
	          reject(err.message)
	        }

	        client.addHttpHeader('Content-Type', `application/soap+xml; charset=utf-8;`);
	        client.addSoapHeader(function (methodName, args, headers, req) {
	          return {
	            'ns3:Action': action
	          };
	          // or you can return "<MyHeader1>SomeValue</MyHeader1>"
	        });

	        client[functionName](args, function(err, result) {
	          if(err){
	            reject(err.message)
	          }		
	          resolve(result)
	        });

	      });

	    } catch (err) {
	      reject(err.message)
	    }

	})

}