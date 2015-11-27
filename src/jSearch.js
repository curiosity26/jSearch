/**
 * jSearch
 *
 * Created by Alex Boyce on 11/27/15.
 *
 */

;(function(x) {
    var jSearch = function (o, q) {
        if (typeof q === 'string') {
            if (typeof o === 'string') {
                return o === q;
            }
            else if (o instanceof Array) {
                for (var i = 0; i < o.length; i++) {
                    if (o[i] == q) {
                        return o;
                    }
                }
            }
            else if (o instanceof Object) {
                for (var k in o) {
                    if (o[k] == q || ((typeof o[k] !== 'string') && jSearch(o[k], q) !== false)) {
                        return o;
                    }
                }
            }
        }
        else if (q instanceof Array) {
            if (o instanceof Array) {
                if (o.length === q.length) {
                    for (var j = 0; j < o.length; j++) {
                        if (jSearch(o[j], q[j]) === false) {
                            return false;
                        }
                    }
                    return o;
                }
            }
            else if (o instanceof Object) {
                for (var m in o) {
                    if (!!o[m] && jSearch(o[m], q) !== false) {
                        return o;
                    }
                }
            }
        }
        else {
            if (typeof o === 'boolean' && typeof q === 'boolean') {
                return o === q;
            }
            else if (o instanceof Array) {
                var ret = [];
                for (var n = 0; n < o.length; n++) {
                    if (jSearch(o[n], q) !== false) {
                        ret.push(o[n]);
                    }
                }

                return ret.length > 0 ? ret : false;
            }
            else if (o instanceof Object) {
                if (o === q) {
                    return o;
                }
                else {
                    for (var p in o) {
                        if (!!q[p] && jSearch(o[p], q[p]) !== false) {
                            return o;
                        }
                    }
                }
            }
        }

        return false;
    };

    x.jSearch = x.jSearch || jSearch;
})(module && module.exports || window);