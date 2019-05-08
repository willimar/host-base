import { Params } from "@angular/router";

export class Strings{
    public static format = function (value: string, args: string[]) {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = value;
    
        // start with the second argument (i = 1)
        for (var i = 1; i < args.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, args[i]);
        }
    
        return theString;
    }
}