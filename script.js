document.addEventListener("DOMContentLoaded", function() {
    alert("The script has been executed!");
    console.log("The script is running...");

    const apiKey = 'JtrF7UhgTA4YNw6gtVRVS75ZDBAq9DEF8wAGrME4TSnR_Zw' // flow api key

    fetch('https://kyc.biometric.kz/api/v1/flows/session/create/', {
    method: 'POST',
    body: JSON.stringify({
        api_key: apiKey
    })
    })
    .then(response => response.json())
    .then(data => {
        const { session_id, technologies } = data
    
        const url = 'https://remote.biometric.kz/flow/' + session_id 
    
        window.open(url, '_blank')
    
    })
  



    // Здесь можно добавить любой другой код на JavaScript
});
