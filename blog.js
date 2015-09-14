var entries = [
{"id":1, "title":"Hello World!", "body":"This is just some stuff.", "published":"09/05/2015"},
{"id":2, "title":"Things I like", "body":"This is just some more stuff.", "published":"09/05/2015"},
{"id":3, "title":"Interesting things", "body":"This is even more stuff", "published":"09/05/2015"},
{"id":4, "title":"Funny jokes", "body":"Some Stuff, man.", "published":"09/05/2015"},
{"id":5, "title":"Places to hike", "body":"Good places to go for a cool hike", "published":"09/05/2015"},
{"id":6, "title":"Places to cycle", "body":"Good places to get in a good spin.", "published":"09/05/2015"}];
 
 
exports.getBlogEntries = function() {
    return entries;
}
 
exports.getBlogEntry = function(id) {
    for(var i=0; i < entries.length; i++) {
        if(entries[i].id == id) return entries[i];
    }
}