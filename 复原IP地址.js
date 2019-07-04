var restoreIpAddresses = function(s) {
    let segments=[],output=[];
    let n = s.length;
    this.s = s;
    backtrack(-1, 3);
    return output;
    function valid(segment){
        let m= segment.length;
        if (m>3){
            return false;
        }
        return (segment.charAt(0) != '0') ? (parseInt(segment) <= 255) : (m == 1);
    }

    function update_output(curr_pos){
        let segment = s.substring(curr_pos + 1, n);
        if (valid(segment)) {
            segments.push(segment);
            output.push(segments.join('.'));
            segments.pop();
        }
    }

    function backtrack(prev_pos,dots){
        let max_pos = Math.min(n - 1, prev_pos + 4);
        for (let curr_pos = prev_pos + 1; curr_pos < max_pos; curr_pos++) {
            let segment = s.substring(prev_pos + 1, curr_pos + 1);
            if (valid(segment)) {
              segments.push(segment);  // place dot
              if (dots - 1 == 0){
                update_output(curr_pos); 
              } else{
                backtrack(curr_pos, dots - 1);
              }
                  // continue to place dots
              segments.pop();  // remove the last placed dot 
            }
          }
    }
    
};

