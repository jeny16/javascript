    // objects

    // singleton 

    const mysym = Symbol("mykey1");

    const JsUser = {
        name: "Jeny",
        "full name": "jeny pansuriya",
        age: 20,
        [mysym] : "mykey1",
        location: "Ahmedabad",
        email: "jenypansuriya2004@gmail.com",
        isLoggedIn: false,
        LastLoginDays: ["monday" , "saturday"]
    }

    console.log(JsUser.email);
    console.log(JsUser["email"]);
    console.log(JsUser["full name"]);
    console.log(JsUser[mysym])
  