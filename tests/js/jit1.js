var tot = 0;
for (var i=0; i<10000; i++) {
  introspect(function(tx) {}) {
    tot += i;
  }
}
print("tot: " + tot);
