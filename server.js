require('dotenv').config()
const BLUEDART_URL = "https://netconnect.bluedart.com/API-QA/Ver1.10/Demo/" // This URL may be change, Please request new one from bluedart

const {
	generateSOAPRequest
} = require("./helper")

const blueDartProfile = {
    Api_type: "S",
  	LicenceKey: process.env.BLUEDART_LIC,
  	LoginID: process.env.BLUEDART_LOGIN_ID,
  	Version: "1.10",
};

const args = {
    pinCode: "146101",
    profile : blueDartProfile,
}

const callMe = async () => {

	try{
		const pincodeResult = await generateSOAPRequest(BLUEDART_URL + "ShippingAPI/Finder/ServiceFinderQuery.svc?wsdl",
		    args,
		    "http://tempuri.org/IServiceFinderQuery/GetServicesforPincode",
		    "GetServicesforPincode"
		);

		console.log(pincodeResult);

	}catch(err){
		console.log("err : ",err)
	}
	

}

callMe();



