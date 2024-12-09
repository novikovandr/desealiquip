function expandScale(domain, scale) {
  if (domain[0] === domain[1]) {
    const offset = 0.1; // small offset to add to the domain
    const newDomain = [domain[0] - offset, domain[1] + offset];
    return scale.domain(newDomain);
  } else {
    return scale.domain(domain);
  }
}
