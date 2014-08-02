var tot = 0;
for (var i=0; i<10000; i++) {
  introspect(JAM.process) {
    tot += i;
  }
}
print("tot: " + tot);
