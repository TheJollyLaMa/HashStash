app.controller('AdultMathController', ['$scope', function($scope,) {
    $scope.title = "Math - for adults.";

    $scope.showNagaokaForm = false;
    $scope.showFreqForm = false;

    $scope.toggleNagaokaForm = function() {
        $scope.showNagaokaForm = !$scope.showNagaokaForm;
    }
    $scope.toggleFreqForm = function() {
        $scope.showFreqForm = !$scope.showFreqForm;
    }

    $scope.resonateFrequencyTable = {};
    $scope.resonateFrequency = function(l,c) {
        $scope.resonateFrequency = 1/(2*Math.pi*Math.sqrt(l*c));
        // put the result in the table
        $scope.resonateFrequencyTable[l][c] = $scope.resonateFrequency;

    }
    



    $scope.Nagaoka = function (u) {
        // returns Nagaoka's coefficient,
        // aka: field non-uniformity coefficient
        // where u=diameter/length
        if (u==0) return(1);
        else {
          uu=u*u;
          m=uu/(1+uu);
          m2=4*Math.sqrt(1+uu);
          a=1;
          b= Math.sqrt(1-m);
          c=a-b;
          ci=1;
          cs=c*c/2+m;
          do {
            ao=(a+b)/2;
            b=Math.sqrt(a*b);
            a=ao;
            co=c;
            c=(a-b);
            cs+=ci*c*c;
            ci*=2;
          } while (c<co);
          cs/=2;
          K=Math.PI/(a+a);
          KmE=K*cs;
          E=K*(1-cs);
          return(1/(3*Math.PI)*(m2/uu*(KmE)+m2*E-4*u));
          }
        }
        // http://electronbunker.ca/eb/CalcMethods1a.html
//         In this code, the ratio of diameter to length is represented by the variable u. The square of the modulus is m. (The modulus k, is not used directly.) A few squares, square roots and constants cancel out, and have been eliminated for efficiency. The code has been optimized primarily for accuracy, and also for speed; not necessarily for compactness, though it is quite compact. The variables a and b are the same as described in the text above. They both converge to the AGM. Variable c is the same as cn described above, except without the divisor of 2. Variable cs is the sum cs. Variables a and b are initialized to 1 and k' respectively, as previously described, and then the arithmetic and geometric means are iterated in the loop until they converge to the same value. The resulting values of a, b and cs are then used to calculate K, E, and K-E (represented by variable KmE). Finally Nagaoka's coefficient kL is calculated and returned in the last line. In testing it was found that for u<10 it requires no more than 7 iterations. For 10<u<1000, no more than 9 iterations are required. 
// Now to explain a couple of subtleties.
// When u is small, the modulus k is small, and both K and E approach the same value π/2. Since formula (4) subtracts E from K, round-off problems arise, and can result in lost precision. In fact, during testing it was found that as u gets smaller and smaller, the result of the function correctly approaches the value 1, then gets a bit noisy in the last couple of decimal places, then suddenly jumps to a value of 2/3. This appeared to be largely due to the subtraction of K-E when u is small. Fortunately, we have formula (8) which calculates the principal terms for K-E directly, minimizing round-off error. Hence, the variable KmE is used in formula (4) in place of the subtraction K-E. Miller [8] does not account for this in his derivation; he uses the separate values of K and E. I should point out though, the error that occurs when using K-E is generally not significant when using double precision and calculating inductance of coils with practical diameter/length ratios. However, if this function is implemented using single precision arithmetic, the error is certain to manifest itself at larger diameter/length ratios and could be a significant problem. In any event there is peace of mind to be had, knowing that the function will produce meaningful results over the whole continuous range of inputs.
// Next, is the convergence test. If we were evaluating a typical infinite series where each term gets progressively smaller at a rate which accelerates with each iteration, we could set the convergence test almost arbitrarily, to see when the term is smaller than some insignificant value such as 10-50. However, in the case of the AGM, we don't have this situation. The two values a and b are converging on a common value, and we have to be aware of the precision with which they are represented. If the variables only have 15 digits of precision, we may find that setting the convergence test to exit on values 10-16 or smaller, may fail to terminate. This is because there is no guarantee that a and b will ever be equal in the least significant digit, again because of round-off error. However, a simple way to ensure that we are getting the highest accuracy, without the worry of the loop not terminating, is to monitor the value c=a-b, and terminate when c stops getting smaller. For this, the variable co is used to save the previous value of c. Consequently, in this routine the loop exits when the condition (c<co) is no longer true.
// Now that we have coded a function for Nagaoka's coefficient, we now have an accurate and convenient formula for inductance:
//  (9)
// Converted to SI units:
//  (9a)
// Where,
// µ0 = 4π×10-7 (The definition of the permeability of free space.)
// r and ℓ are given in meters, and then LS will be in Henries.
}]);
