function collect_same_elements(collection_a, collection_b) {
 	var arr = [];
    	var i = 0;
    	var j = 0;
        (function digui(){
	    for(i=0;i<collection_b.length;i++){
	    	if(collection_b[i]==collection_a[j]){
	    		arr.push(collection_b[i]);
	    	}
	    }	
	    j++;
	    if(j>=collection_a.length){
	    return arr;
	    }else{
	    	digui();
	    }
    	})();
    	return arr;
}

module.exports = collect_same_elements;
