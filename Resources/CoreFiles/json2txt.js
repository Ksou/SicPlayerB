/**
 * @author Keith
 */

function json2txt(obj, path)
{// got this off StackOverflow , this isn't really apart of the 
// main app , it just makes reading JSON MUCH MUCH easier 
    var txt = '';
    for (var key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            if ('object' == typeof(obj[key]))
            {
                txt += json2txt(obj[key], path + (path ? '.' : '') + key);
            } 
            else
            {
                txt += path + '.' + key + '\t' + obj[key] + '\n';
            }
        }
    }
    return txt;
}

module.exports = json2txt ; 