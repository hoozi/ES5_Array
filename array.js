/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi/ES5_Array
 * @email   : 287036406@qq.com
 * @date    : 2015-06-24 16:15:20
 * @version : 0.0.1
 */

 //forEach
!Array.prototype.forEach && 
(
	Array.prototype.forEach = function(cb) {
		for(var i=0, len=this.length;i<len;i++) {
			cb.call(this,this[i],i,this);
		}
	}
);

//map
!Array.prototype.map && 
(
	Array.prototype.map = function(cb) {
		var res = [];
		for(var i=0, len=this.length;i<len;i++) {
			res.push(cb.call(this, this[i], i, this));
		}
		return res;
	}
);

//indexOf
!Array.prototype.indexOf && 
(
	Array.prototype.indexOf = function(v, start) {
		for(var i=!start?0:start, len=this.length;i<len;i++) {
			if(this[i]===v) {
				return i;
			}
		}
		return -1;
	}
);

//filter
!Array.prototype.filter && 
(
	Array.prototype.filter = function(cb) {
		var res = [];
		for(var i=0, len=this.length;i<len;i++) {
			var isTrue = cb.call(this, this[i], i, this);
			if(isTrue) {
				res.push(this[i]);
			}
		}
		return res;
	}
);

//every
!Array.prototype.every && 
(
	Array.prototype.every = function(cb) {
		for(var i=0, len=this.length;i<len;i++) {
			var isTrue = cb.call(this, this[i], i, this);
			if(!isTrue) {
				return false
			}
		}
		return true;
	}
);

//some
!Array.prototype.some && 
(
	Array.prototype.some = function(cb) {
		for(var i=0, len=this.length;i<len;i++) {
			var isTrue = cb.call(this, this[i], i, this);
			if(isTrue) {
				return true;
			}
		}
		return false;
	}
);

//reduce
!Array.prototype.reduce && 
(
	Array.prototype.reduce = function(cb) {
		var prev = this[0]
		for(var i=1, len=this.length;i<len;i++) {
			prev = cb.call(this, prev, this[i], i, this)
		}
		return prev
	}
);

//reduceRight
!Array.prototype.reduceRight && 
(
	Array.prototype.reduceRight = function(cb) {
		var prev = this[this.length-1]
		for(var i=this.length-2;i>=0;i--) {
			prev = cb.call(this, prev, this[i], i, this);
		}
		return prev;
	}
);
