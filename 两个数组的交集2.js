var intersect = function(nums1, nums2) {
    const record = {};
    for (let i = 0; i < nums1.length; i++) {
        if (record[nums1[i]]) {
            record[nums1[i]]++;
        } else {
            record[nums1[i]] = 1;
        }
    }
    const result = [];
    for(let j = 0; j < nums2.length; j++) {
        if (record[nums2[j]] > 0) {
            result.push(nums2[j]);
            record[nums2[j]] --;
        }
    }
    return result;
};

intersect([1,2,2,1],[2,2,1])