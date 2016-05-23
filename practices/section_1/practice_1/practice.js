function collect_same_elements(collection_a, collection_b) {
 	var arr = [];
    	var i = 0;
    	var j = 0;
        (function digui(){
	    for(i=0;i<collection_a.length;i++){
	    	if(collection_a[i]==collection_b[j]){
	    		arr.push(collection_a[i]);
	    		j++;
	    		digui();
	    	}
	    }
	    if(j>=collection_b.length){
	    return arr;
	    }
    	})();
    	return arr;
}

module.exports = collect_same_elements;
