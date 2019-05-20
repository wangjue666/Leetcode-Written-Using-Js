var isSubsequence = function(s, t) {
    if(s==''){
        return true;
    }
    let count=0;
    for(let i=0;i<t.length;i++){
        if(s[count]==t[i]){
            count++;
            if(count==s.length){
                return true;
            } 
        }
    }
    return false;
};

class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s=="") return true;
        int cnt = 0;
        for(int i=0;i<t.size();i++)
        {
            if(s[cnt]==t[i])
            {
                cnt++;
                if(cnt==s.size()) return true;
            }
        }
        return false;
    }
};