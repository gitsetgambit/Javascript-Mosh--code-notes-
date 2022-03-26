let role = "moderator";

switch (role) {
    case "guest":
        console.log("guest user");
        break;

    case "moderator":
        console.log("moderator User");
        break;

    default:
        console.log("unknown");
}

// TODO: we can also use if else
if (role === "guest") console.log("guest");
else if (role === "moderator") console.log("moderator");
else console.log("unknown user");

// fixme: do use switch case often it makes code noisy
