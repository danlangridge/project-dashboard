import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


if (Meteor.isServer) {
}

Meteor.methods({

    getGithubData(user, repoName, request) {
        var result;

        var personalAccessToken = 'token ';

        var URL = "https://api.github.com/repos";
        URL = URL.concat("/", user, "/", repoName, request);

        try {
            result = HTTP.call("GET", URL,
                {
                    headers: {
                        'User-Agent': 'Meteor/1.0',
                        Authorization : personalAccessToken
                    }
                } 
                );
        } catch(err) {
            console.log(err);
            return undefined;
        }

        console.log(result.headers);
        return result.content; 
    }
});
