// This function calculates acceleration based on different inputs.
function getAcceleration(obj) {
    // Define variables for the three different methods of calculating acceleration.
    const accelerationByForceAndMass = obj.f / obj.m;
    const accelerationByChangeInVelocityAndTime = obj.Δv / obj.Δt;
    const accelerationByDistanceAndTime = (2 * obj.d) / (obj.t * obj.t);
    const impossibleResult = 'impossible';
  
    // Check which method of calculating acceleration should be used based on the inputs.
    if (typeof obj.f === 'number' && typeof obj.m === 'number') {
      return accelerationByForceAndMass;
    } else if (typeof obj.Δv === 'number' && typeof obj.Δt === 'number') {
      return accelerationByChangeInVelocityAndTime;
    } else if (typeof obj.d === 'number' && typeof obj.t === 'number') {
      return accelerationByDistanceAndTime;
    } else {
      return impossibleResult;
    }
  }