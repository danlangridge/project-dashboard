import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


if (Meteor.isServer) {
}

Meteor.methods({
    projectGet(user, repoName) {
        var result;

        var personalAccessToken = '';

        var participation = '/stats/participation';

        var URL = "https://api.github.com/repos";
        URL = URL.concat("/", user, "/", repoName, participation);

        try {
            result = HTTP.call("GET", URL,
                {
                    headers: {
                        'User-Agent': 'Meteor/1.0',
                        auth : personalAccessToken
                    }
                } 
                );
        } catch(err) {
            console.log(err);
            return JSON.parse("{\"owner\":[0]}");
        }

        return JSON.parse(result.content); 
    }


});
