import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


if (Meteor.isServer) {
}

Meteor.methods({
    projectGet(user, repoName) {
        var result;
        
        var URL = "https://api.github.com/repos";
        URL = URL.concat("/", user, "/", repoName);

        try {
            result = HTTP.call("GET", URL,
                {
                    headers: {
                        "User-Agent": "Meteor/1.0"
                    }
                } 
                );
        } catch(err) {
            console.log(err);
            result = "hello";
        }

        return result; 
    }


});
