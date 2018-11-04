import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

const exampleData = "http://www.json-generator.com/api/json/get/bPMNmixElK?indent=2"

Meteor.methods({
    "get_data"(){
        try {
            const result = HTTP.get(exampleData)
            return result.data
        } catch (error) {
            throw(error)
        }
    }
})