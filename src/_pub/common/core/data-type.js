/* ====================================== 数据类型  ====================================== */
const D = (bool, success, fail) => {
	bool ? success?.( ) : fail?.( )
	return bool
}
const $ = {
	hasArray	: (d,s,f) => D($.isArray(d) && d.length > 0, s, f),
	hasObject 	: (d,s,f) => D($.isObject(d) && Object.keys(d).length > 0, s, f),
	isEmpty		: (d,s,f) => D(d === null || d === undefined || d === '', s, f),
	isNotEmpty 	: (d,s,f) => D(!$.isEmpty(d), s, f),
	getArray	: d => $.isArray(d) ? d : [ ],
	getObject 	: d => $.isObject(d) ? d : { }
};
(['String', 'Number', 'Array', 'Object', 'Boolean', 'Function', 'Undefined', 'Null']).forEach(v =>  $['is' + v] = (d,s,f) => D({ }.toString.call(d) === '[object '+ v +']', s, f) ) 
export default $