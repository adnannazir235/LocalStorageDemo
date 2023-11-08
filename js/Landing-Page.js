let checkKey = null;

for (let i = 0; i < localStorage.length; i++) {

  let key = localStorage.key(i);
  let value = localStorage.getItem(key);

  if (value.includes("Log")) {

    checkKey = key;
    break;
  };
};

if (checkKey !== null) {

  console.log(`User (${checkKey}) is Logged In.`); // See the Key that contains the Substring "Log", See who's Logged In right now...

  document.getElementById("toggle").style.display = "inline-block";
  document.getElementById("data").classList.add("d-none");
  document.getElementById("logged_data").classList.remove("d-none");

  //   console.log("The key exists!, Logged In"); // See in console if the data exists in localStorage & Logged In...

  const form = document.forms["home_form"];
  const age = form["age"];
  const gender = form["gender"];
  const education = form["education"];
  const country = form["country"];
  const city = form["city"];
  const hobby = form["hobby"];

  checkKey_data = JSON.parse(localStorage.getItem(checkKey));
  // console.log(checkKey_data);


  function override_delete(del) {
    
    if (del !== "OK") {

      obj = {};

      if (age.value.length !== 0) {
  
        obj.Age = age.value;
      }

      else {
        
        obj.Age = "";
      };
  
      if (gender.value.length !== 0) {
  
        obj.Gender = gender.value;
      }

      else {
        
        obj.Gender = "";
      };
  
      if (education.value.length !== 0) {
  
        obj.Education = education.value;
      }

      else {
        
        obj.Education = "";
      };
  
      if (country.value.length !== 0) {
  
        obj.Country = country.value;
      }

      else {
        
        obj.Country = "";
      };
  
      if (city.value.length !== 0) {
  
        obj.City = city.value;
      }

      else {
        
        obj.City = "";
      };
  
      if (hobby.value.length !== 0) {
  
        obj.Hobby = hobby.value;
      }

      else {
        
        obj.Hobby = "";
      };
  
      // console.log(obj);
  
      all_data = { ...checkKey_data, ...obj };
      // console.log(all_data);
  
      localStorage.setItem(checkKey, JSON.stringify(all_data));
      window.location.reload();
    }

    else {

      delete checkKey_data.Age;
      delete checkKey_data.Gender;
      delete checkKey_data.Education;
      delete checkKey_data.Country;
      delete checkKey_data.City;
      delete checkKey_data.Hobby;
  
      localStorage.setItem(checkKey, JSON.stringify(checkKey_data));
      window.location.reload();
    };
  };

  if (checkKey_data.Age == null) {
    
    // console.log("No"); // See if the data is Not Ssaved from the Landing form (the first time one)...

    Edit = document.getElementById("edit");
    Edit.style.display = "block";

    form.addEventListener("submit", override_delete);
  }

  else {

    Edit = document.getElementById("edit");
    Save = document.getElementById("add_save");
    Delete = document.getElementById("delete");
    
    button_Edit = document.getElementById("edit_btn");
    button_Save = document.getElementById("add_save_btn");
    button_Delete = document.getElementById("delete_btn");
    
    age.value = checkKey_data.Age;
    gender.value = checkKey_data.Gender;
    education.value = checkKey_data.Education;
    country.value = checkKey_data.Country;
    city.value = checkKey_data.City;
    hobby.value = checkKey_data.Hobby;
    
    age.setAttribute("disabled", "");
    gender.setAttribute("disabled", "");
    education.setAttribute("disabled", "");
    country.setAttribute("disabled", "");
    city.setAttribute("disabled", "");
    hobby.setAttribute("disabled", "");

    button_Edit.value = "Edit";
    Edit.style.display = "block";

    // console.log("Hi"); // See if the data is Saved from the Landing form (the first time one)...

    button_Edit.addEventListener("click", () => {

      Edit.style.display = "none";
      Save.style.display = "block";
      Delete.style.display = "block";

      age.removeAttribute("disabled");
      gender.removeAttribute("disabled");
      education.removeAttribute("disabled");
      country.removeAttribute("disabled");
      city.removeAttribute("disabled");
      hobby.removeAttribute("disabled");
    });

    button_Save.addEventListener("click", () => {

      Save.style.display = "none";
      Edit.style.display = "block";

      override_delete();
    });

    button_Delete.addEventListener("click", () => {

      // console.log("Hello");
      var del = "OK";
      override_delete(del);
    });
  };

  function log_out() {
    // localStorage.removeItem("Log_In_Key");

    let update_key = JSON.parse(localStorage.getItem(checkKey));
    delete update_key.Log;

    localStorage.setItem(checkKey, JSON.stringify(update_key));

    location.reload();
    // console.log("Hello"); // See if the function is Working...
  };

  function del_account() {
    localStorage.removeItem(`${checkKey}`);
    location.reload();
    // console.log("Hello, removed"); // See if the function is Working...
  };
}

else if (localStorage.length == 0) {

  console.log("LocalStorage is Empty..."); // See the Key that contains the Substring "Log", See who's Logged In right now...
}

else {

  console.log("No one is Logged In..."); // See the Key that contains the Substring "Log", See who's Logged In right now...
};

function sign_up() {

  window.location.href = "/html/Sign-Up.html";
};

function log_in() {

  window.location.href = "/html/Log-In.html";
};