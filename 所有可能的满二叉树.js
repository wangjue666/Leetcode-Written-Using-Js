var allPossibleFBT = function(N) {
    const memo={};
    const ret=buildFBT(N);
    return ret;

    function buildFBT(N){
        if(memo[N]) {
            console.log('bingo');
            return memo[N];
        }
        if(N<=0) {
            return [];
        }
        if(N===1) {
            return [new TreeNode(0)];
        }

        const ret=[];
 for(let i=1;i<N-1;i+=2) {
    const leftNodeCount=i;
    const rightNodeCount=N-i-1;
    const leftTreePossibilities=buildFBT(leftNodeCount);
    const rightTreePossibilities=buildFBT(rightNodeCount);
    for(let j=0;j<leftTreePossibilities.length;j++) {
      const leftTree=leftTreePossibilities[j];
      for(let k=0;k<rightTreePossibilities.length;k++) {
        const rightTree=rightTreePossibilities[k];
        const root=new TreeNode(0);
        root.left=leftTree;
        root.right=rightTree;
        ret.push(root);
      }
    }
  }
  
  if(memo[N]==null) {
    memo[N]=ret;
  }
  return ret;

    }
};

const memo={};

function buildFBT(N) {
  if(memo[N]) {
    console.log('bingo');
    return memo[N];
  }
  
  if(N<=0) {
    return [];
  }
  
  if(N===1) {
    return [new TreeNode(0)];
  }
  
  const ret=[];
  
  for(let i=1;i<N-1;i+=2) {
    const leftNodeCount=i;
    const rightNodeCount=N-i-1;
    const leftTreePossibilities=buildFBT(leftNodeCount);
    const rightTreePossibilities=buildFBT(rightNodeCount);
    for(let j=0;j<leftTreePossibilities.length;j++) {
      const leftTree=leftTreePossibilities[j];
      for(let k=0;k<rightTreePossibilities.length;k++) {
        const rightTree=rightTreePossibilities[k];
        const root=new TreeNode(0);
        root.left=leftTree;
        root.right=rightTree;
        ret.push(root);
      }
    }
  }
  
  if(memo[N]==null) {
    memo[N]=ret;
  }
  return ret;
}

var allPossibleFBT = function(N) {
  const ret=buildFBT(N);
  return ret;
};