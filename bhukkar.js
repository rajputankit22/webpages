// Countries
var country_arr = new Array("Andhra Pradesh India", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra");

// States
var s_a = new Array();
s_a[0] = "";
s_a[1] = "Hyderabad|Vijayawada|Tirupati|Warangal|Visakhapatnam";
s_a[2] = "Itanagar";
s_a[3] = "Dispur|Guwahati|Tezpur";
s_a[4] = "Gaya|Nalanda|Patna|Rajgir|Vaishali";
s_a[5] = "Raipur";
s_a[6] = "Delhi";
s_a[7] = "Canacona|Mapusa|Margao|Old Goa|Panaji|Ponda|Vasco Da Gama";
s_a[8] = "Ahmedabad|Vadodara|Gandhinagar|Surat";
s_a[9] = "Chandigarh|Faridabad|Gurgaon";
s_a[10] = "Shimla|Manali|Dharamsala|Kullu";
s_a[11] = "Gulmarg|Ladakh|Jammu|Leh|Pahalgam|Srinagar";
s_a[12] = "Dhanbad|Jamshedpur|Ranchi";
s_a[13] = "Bangalore|Hampi|Hassan|Mangalore|Mysore|Udupi";
s_a[14] = "Alleppey|Cochin|Kumarakom|Kovalam|Kozhikode|Munnar|Quilon|Thekkady|Trivandrum";
s_a[15] = "Bhopal|Indore|Gwalior|Orchha|Khajuraho";
s_a[16] = "	Aurangabad|Mumbai|Nagpur|Pune";

function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select City', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select State', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}
