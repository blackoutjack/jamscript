//JAMScript.startProfile("load");
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    var v56 = p1 + "\n";
    return v56
  }
  introspect(JAMScript.process) {
    var v1 = [sequence, /(.{60})/g, v0];
    var v5 = sequence.replace
  }
  var v6 = JAMScript.bind(v5, v1);
  sequence = v6();
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v57 = arrayOfSequences[0];
  var lengthOfAlign = v57.length;
  var v58 = arrayOfSequences.length;
  var v59 = v58 < 2;
  if(v59) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v60 = arrayOfTitles.length;
  var v5 = i$$1 < v60;
  for(;v5;) {
    var v61 = arrayOfTitles[i$$1];
    introspect(JAMScript.process) {
      var v7 = [v61, /\S/];
      var v8 = v61.search
    }
    var v9 = JAMScript.bind(v8, v7);
    var v62 = v9();
    var v40 = v62 == -1;
    var v63 = !v40;
    if(v63) {
      var v765 = arrayOfSequences[i$$1];
      introspect(JAMScript.process) {
        var v10 = [v765, /\S/];
        var v11 = v765.search
      }
      var v12 = JAMScript.bind(v11, v10);
      var v766 = v12();
      var v757 = v766 == -1;
      var v767 = !v757;
      if(v767) {
        var v768 = arrayOfSequences[i$$1];
        var v769 = v768.length;
        v757 = v769 != lengthOfAlign
      }
      v40 = v757
    }
    if(v40) {
      alert("There is a problem with the alignment format 55.");
      return false
    }
    i$$1++;
    var v64 = arrayOfTitles.length;
    v5 = i$$1 < v64
  }
  return true
}
function checkCodonTable(codonTable) {
  introspect(JAMScript.process) {
    var v13 = [codonTable, /AmAcid/];
    var v14 = codonTable.search
  }
  var v15 = JAMScript.bind(v14, v13);
  var v65 = v15();
  var v41 = v65 == -1;
  var v66 = !v41;
  if(v66) {
    introspect(JAMScript.process) {
      var v16 = [codonTable, /Codon/];
      var v17 = codonTable.search
    }
    var v18 = JAMScript.bind(v17, v16);
    var v770 = v18();
    var v758 = v770 == -1;
    var v771 = !v758;
    if(v771) {
      introspect(JAMScript.process) {
        var v19 = [codonTable, /Number/];
        var v20 = codonTable.search
      }
      var v21 = JAMScript.bind(v20, v19);
      var v789 = v21();
      var v783 = v789 == -1;
      var v790 = !v783;
      if(v790) {
        introspect(JAMScript.process) {
          var v22 = [codonTable, /\/1000/];
          var v23 = codonTable.search
        }
        var v24 = JAMScript.bind(v23, v22);
        var v807 = v24();
        var v805 = v807 == -1;
        var v808 = !v805;
        if(v808) {
          introspect(JAMScript.process) {
            var v25 = [codonTable, /Fraction\s*\.\./];
            var v26 = codonTable.search
          }
          var v27 = JAMScript.bind(v26, v25);
          var v809 = v27();
          v805 = v809 == -1
        }
        v783 = v805
      }
      v758 = v783
    }
    v41 = v758
  }
  if(v41) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v67 = formElement.value;
  introspect(JAMScript.process) {
    var v28 = [v67, /\S/];
    var v29 = v67.search
  }
  var v30 = JAMScript.bind(v29, v28);
  var v68 = v30();
  var v69 = v68 == -1;
  if(v69) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v70 = arrayOfPatterns.length;
  var v6 = z$$2 < v70;
  for(;v6;) {
    var v71 = arrayOfPatterns[z$$2];
    introspect(JAMScript.process) {
      var v31 = [v71, /^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/];
      var v32 = v71.search
    }
    var v33 = JAMScript.bind(v32, v31);
    var v72 = v33();
    var v73 = v72 == -1;
    if(v73) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v74 = arrayOfPatterns[z$$2];
    var v75 = moreExpressionCheck(v74);
    var v76 = v75 == false;
    if(v76) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v77 = arrayOfPatterns.length;
    v6 = z$$2 < v77
  }
  var v78 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v78);
  var v79 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v79);
  var j = 0;
  var v80 = arrayOfPatterns.length;
  var v7 = j < v80;
  for(;v7;) {
    var v81 = arrayOfPatterns[j];
    introspect(JAMScript.process) {
      var v34 = [v81, /\/.+\//];
      var v35 = v81.match
    }
    var v36 = JAMScript.bind(v35, v34);
    var v82 = v36();
    var v83 = v82 + "gi";
    var v37 = JAMScript.bind(eval, [null, v83]);
    var v84 = v37();
    geneticCodeMatchExp[j] = v84;
    var v85 = arrayOfPatterns[j];
    introspect(JAMScript.process) {
      var v38 = [v85, /=[a-zA-Z\*]/];
      var v39 = v85.match
    }
    var v40 = JAMScript.bind(v39, v38);
    var v86 = v40();
    introspect(JAMScript.process) {
      var v41 = [v86];
      var v42 = v86.toString
    }
    var v43 = JAMScript.bind(v42, v41);
    var v87 = v43();
    geneticCodeMatchResult[j] = v87;
    var v88 = geneticCodeMatchResult[j];
    introspect(JAMScript.process) {
      var v44 = [v88, /=/g, ""];
      var v45 = v88.replace
    }
    var v46 = JAMScript.bind(v45, v44);
    var v89 = v46();
    geneticCodeMatchResult[j] = v89;
    j++;
    var v90 = arrayOfPatterns.length;
    v7 = j < v90
  }
  var i$$2 = 0;
  var v91 = testSequence.length;
  var v92 = v91 - 3;
  var v9 = i$$2 <= v92;
  for(;v9;) {
    var v93 = i$$2 + 3;
    introspect(JAMScript.process) {
      var v47 = [testSequence, i$$2, v93];
      var v48 = testSequence.substring
    }
    var v49 = JAMScript.bind(v48, v47);
    codon = v49();
    j = 0;
    var v94 = geneticCodeMatchExp.length;
    var v8 = j < v94;
    for(;v8;) {
      var v95 = geneticCodeMatchExp[j];
      introspect(JAMScript.process) {
        var v50 = [codon, v95];
        var v51 = codon.search
      }
      var v52 = JAMScript.bind(v51, v50);
      var v96 = v52();
      var v97 = v96 != -1;
      if(v97) {
        var v98 = oneMatch == true;
        if(v98) {
          var v99 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v100 = v99 + ".";
          alert(v100);
          return false
        }
        oneMatch = true
      }
      j++;
      var v101 = geneticCodeMatchExp.length;
      v8 = j < v101
    }
    var v102 = oneMatch == false;
    if(v102) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v103 = testSequence.length;
    var v104 = v103 - 3;
    v9 = i$$2 <= v104
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v105 = arrayOfPatterns$$1.length;
  var v10 = z$$3 < v105;
  for(;v10;) {
    var v106 = arrayOfPatterns$$1[z$$3];
    introspect(JAMScript.process) {
      var v53 = [v106, /[^acdefghiklmnpqrstvwyz]/i];
      var v54 = v106.search
    }
    var v55 = JAMScript.bind(v54, v53);
    var v107 = v55();
    var v108 = v107 != -1;
    if(v108) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v109 = arrayOfPatterns$$1.length;
    v10 = z$$3 < v109
  }
  var i$$3 = 0;
  var v110 = arrayOfPatterns$$1.length;
  var v12 = i$$3 < v110;
  for(;v12;) {
    var v111 = arrayOfPatterns$$1[i$$3];
    var v112 = "[" + v111;
    var v113 = v112 + "]";
    var re = new RegExp(v113, "gi");
    var j$$1 = i$$3 + 1;
    var v114 = arrayOfPatterns$$1.length;
    var v11 = j$$1 < v114;
    for(;v11;) {
      var v115 = arrayOfPatterns$$1[j$$1];
      introspect(JAMScript.process) {
        var v56 = [v115, re];
        var v57 = v115.search
      }
      var v58 = JAMScript.bind(v57, v56);
      var v116 = v58();
      var v117 = v116 != -1;
      if(v117) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1++;
      var v118 = arrayOfPatterns$$1.length;
      v11 = j$$1 < v118
    }
    i$$3++;
    var v119 = arrayOfPatterns$$1.length;
    v12 = i$$3 < v119
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v120 = arrayOfPatterns$$2.length;
  var v13 = z$$4 < v120;
  for(;v13;) {
    var v121 = arrayOfPatterns$$2[z$$4];
    introspect(JAMScript.process) {
      var v59 = [v121, /^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i];
      var v60 = v121.search
    }
    var v61 = JAMScript.bind(v60, v59);
    var v122 = v61();
    var v123 = v122 == -1;
    if(v123) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v124 = arrayOfPatterns$$2[z$$4];
    var v125 = moreExpressionCheck(v124);
    var v126 = v125 == false;
    if(v126) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v127 = arrayOfPatterns$$2.length;
    v13 = z$$4 < v127
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v128 = getSequenceFromFasta(text$$7);
  introspect(JAMScript.process) {
    var v62 = [v128, /[^A-Za-z]/g, ""];
    var v63 = v128.replace
  }
  var v64 = JAMScript.bind(v63, v62);
  var v129 = v64();
  var v130 = v129.length;
  var v131 = v130 > maxInput;
  if(v131) {
    var v132 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v133 = v132 + " characters.";
    alert(v133);
    return false
  }else {
    return true
  }
}
function checkTextLength(text$$8, maxInput$$1) {
  var v134 = text$$8.length;
  var v135 = v134 > maxInput$$1;
  if(v135) {
    var v136 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v137 = v136 + " characters.";
    alert(v137);
    return false
  }else {
    return true
  }
}
function complement(dnaSequence) {
  introspect(JAMScript.process) {
    var v65 = [dnaSequence, /g/g, "1"];
    var v66 = dnaSequence.replace
  }
  var v67 = JAMScript.bind(v66, v65);
  dnaSequence = v67();
  introspect(JAMScript.process) {
    var v68 = [dnaSequence, /c/g, "2"];
    var v69 = dnaSequence.replace
  }
  var v70 = JAMScript.bind(v69, v68);
  dnaSequence = v70();
  introspect(JAMScript.process) {
    var v71 = [dnaSequence, /1/g, "c"];
    var v72 = dnaSequence.replace
  }
  var v73 = JAMScript.bind(v72, v71);
  dnaSequence = v73();
  introspect(JAMScript.process) {
    var v74 = [dnaSequence, /2/g, "g"];
    var v75 = dnaSequence.replace
  }
  var v76 = JAMScript.bind(v75, v74);
  dnaSequence = v76();
  introspect(JAMScript.process) {
    var v77 = [dnaSequence, /G/g, "1"];
    var v78 = dnaSequence.replace
  }
  var v79 = JAMScript.bind(v78, v77);
  dnaSequence = v79();
  introspect(JAMScript.process) {
    var v80 = [dnaSequence, /C/g, "2"];
    var v81 = dnaSequence.replace
  }
  var v82 = JAMScript.bind(v81, v80);
  dnaSequence = v82();
  introspect(JAMScript.process) {
    var v83 = [dnaSequence, /1/g, "C"];
    var v84 = dnaSequence.replace
  }
  var v85 = JAMScript.bind(v84, v83);
  dnaSequence = v85();
  introspect(JAMScript.process) {
    var v86 = [dnaSequence, /2/g, "G"];
    var v87 = dnaSequence.replace
  }
  var v88 = JAMScript.bind(v87, v86);
  dnaSequence = v88();
  introspect(JAMScript.process) {
    var v89 = [dnaSequence, /a/g, "1"];
    var v90 = dnaSequence.replace
  }
  var v91 = JAMScript.bind(v90, v89);
  dnaSequence = v91();
  introspect(JAMScript.process) {
    var v92 = [dnaSequence, /t/g, "2"];
    var v93 = dnaSequence.replace
  }
  var v94 = JAMScript.bind(v93, v92);
  dnaSequence = v94();
  introspect(JAMScript.process) {
    var v95 = [dnaSequence, /1/g, "t"];
    var v96 = dnaSequence.replace
  }
  var v97 = JAMScript.bind(v96, v95);
  dnaSequence = v97();
  introspect(JAMScript.process) {
    var v98 = [dnaSequence, /2/g, "a"];
    var v99 = dnaSequence.replace
  }
  var v100 = JAMScript.bind(v99, v98);
  dnaSequence = v100();
  introspect(JAMScript.process) {
    var v101 = [dnaSequence, /A/g, "1"];
    var v102 = dnaSequence.replace
  }
  var v103 = JAMScript.bind(v102, v101);
  dnaSequence = v103();
  introspect(JAMScript.process) {
    var v104 = [dnaSequence, /T/g, "2"];
    var v105 = dnaSequence.replace
  }
  var v106 = JAMScript.bind(v105, v104);
  dnaSequence = v106();
  introspect(JAMScript.process) {
    var v107 = [dnaSequence, /1/g, "T"];
    var v108 = dnaSequence.replace
  }
  var v109 = JAMScript.bind(v108, v107);
  dnaSequence = v109();
  introspect(JAMScript.process) {
    var v110 = [dnaSequence, /2/g, "A"];
    var v111 = dnaSequence.replace
  }
  var v112 = JAMScript.bind(v111, v110);
  dnaSequence = v112();
  introspect(JAMScript.process) {
    var v113 = [dnaSequence, /u/g, "a"];
    var v114 = dnaSequence.replace
  }
  var v115 = JAMScript.bind(v114, v113);
  dnaSequence = v115();
  introspect(JAMScript.process) {
    var v116 = [dnaSequence, /U/g, "A"];
    var v117 = dnaSequence.replace
  }
  var v118 = JAMScript.bind(v117, v116);
  dnaSequence = v118();
  introspect(JAMScript.process) {
    var v119 = [dnaSequence, /r/g, "1"];
    var v120 = dnaSequence.replace
  }
  var v121 = JAMScript.bind(v120, v119);
  dnaSequence = v121();
  introspect(JAMScript.process) {
    var v122 = [dnaSequence, /y/g, "2"];
    var v123 = dnaSequence.replace
  }
  var v124 = JAMScript.bind(v123, v122);
  dnaSequence = v124();
  introspect(JAMScript.process) {
    var v125 = [dnaSequence, /1/g, "y"];
    var v126 = dnaSequence.replace
  }
  var v127 = JAMScript.bind(v126, v125);
  dnaSequence = v127();
  introspect(JAMScript.process) {
    var v128 = [dnaSequence, /2/g, "r"];
    var v129 = dnaSequence.replace
  }
  var v130 = JAMScript.bind(v129, v128);
  dnaSequence = v130();
  introspect(JAMScript.process) {
    var v131 = [dnaSequence, /R/g, "1"];
    var v132 = dnaSequence.replace
  }
  var v133 = JAMScript.bind(v132, v131);
  dnaSequence = v133();
  introspect(JAMScript.process) {
    var v134 = [dnaSequence, /Y/g, "2"];
    var v135 = dnaSequence.replace
  }
  var v136 = JAMScript.bind(v135, v134);
  dnaSequence = v136();
  introspect(JAMScript.process) {
    var v137 = [dnaSequence, /1/g, "Y"];
    var v138 = dnaSequence.replace
  }
  var v139 = JAMScript.bind(v138, v137);
  dnaSequence = v139();
  introspect(JAMScript.process) {
    var v140 = [dnaSequence, /2/g, "R"];
    var v141 = dnaSequence.replace
  }
  var v142 = JAMScript.bind(v141, v140);
  dnaSequence = v142();
  introspect(JAMScript.process) {
    var v143 = [dnaSequence, /k/g, "1"];
    var v144 = dnaSequence.replace
  }
  var v145 = JAMScript.bind(v144, v143);
  dnaSequence = v145();
  introspect(JAMScript.process) {
    var v146 = [dnaSequence, /m/g, "2"];
    var v147 = dnaSequence.replace
  }
  var v148 = JAMScript.bind(v147, v146);
  dnaSequence = v148();
  introspect(JAMScript.process) {
    var v149 = [dnaSequence, /1/g, "m"];
    var v150 = dnaSequence.replace
  }
  var v151 = JAMScript.bind(v150, v149);
  dnaSequence = v151();
  introspect(JAMScript.process) {
    var v152 = [dnaSequence, /2/g, "k"];
    var v153 = dnaSequence.replace
  }
  var v154 = JAMScript.bind(v153, v152);
  dnaSequence = v154();
  introspect(JAMScript.process) {
    var v155 = [dnaSequence, /K/g, "1"];
    var v156 = dnaSequence.replace
  }
  var v157 = JAMScript.bind(v156, v155);
  dnaSequence = v157();
  introspect(JAMScript.process) {
    var v158 = [dnaSequence, /M/g, "2"];
    var v159 = dnaSequence.replace
  }
  var v160 = JAMScript.bind(v159, v158);
  dnaSequence = v160();
  introspect(JAMScript.process) {
    var v161 = [dnaSequence, /1/g, "M"];
    var v162 = dnaSequence.replace
  }
  var v163 = JAMScript.bind(v162, v161);
  dnaSequence = v163();
  introspect(JAMScript.process) {
    var v164 = [dnaSequence, /2/g, "K"];
    var v165 = dnaSequence.replace
  }
  var v166 = JAMScript.bind(v165, v164);
  dnaSequence = v166();
  introspect(JAMScript.process) {
    var v167 = [dnaSequence, /b/g, "1"];
    var v168 = dnaSequence.replace
  }
  var v169 = JAMScript.bind(v168, v167);
  dnaSequence = v169();
  introspect(JAMScript.process) {
    var v170 = [dnaSequence, /v/g, "2"];
    var v171 = dnaSequence.replace
  }
  var v172 = JAMScript.bind(v171, v170);
  dnaSequence = v172();
  introspect(JAMScript.process) {
    var v173 = [dnaSequence, /1/g, "v"];
    var v174 = dnaSequence.replace
  }
  var v175 = JAMScript.bind(v174, v173);
  dnaSequence = v175();
  introspect(JAMScript.process) {
    var v176 = [dnaSequence, /2/g, "b"];
    var v177 = dnaSequence.replace
  }
  var v178 = JAMScript.bind(v177, v176);
  dnaSequence = v178();
  introspect(JAMScript.process) {
    var v179 = [dnaSequence, /B/g, "1"];
    var v180 = dnaSequence.replace
  }
  var v181 = JAMScript.bind(v180, v179);
  dnaSequence = v181();
  introspect(JAMScript.process) {
    var v182 = [dnaSequence, /V/g, "2"];
    var v183 = dnaSequence.replace
  }
  var v184 = JAMScript.bind(v183, v182);
  dnaSequence = v184();
  introspect(JAMScript.process) {
    var v185 = [dnaSequence, /1/g, "V"];
    var v186 = dnaSequence.replace
  }
  var v187 = JAMScript.bind(v186, v185);
  dnaSequence = v187();
  introspect(JAMScript.process) {
    var v188 = [dnaSequence, /2/g, "B"];
    var v189 = dnaSequence.replace
  }
  var v190 = JAMScript.bind(v189, v188);
  dnaSequence = v190();
  introspect(JAMScript.process) {
    var v191 = [dnaSequence, /d/g, "1"];
    var v192 = dnaSequence.replace
  }
  var v193 = JAMScript.bind(v192, v191);
  dnaSequence = v193();
  introspect(JAMScript.process) {
    var v194 = [dnaSequence, /h/g, "2"];
    var v195 = dnaSequence.replace
  }
  var v196 = JAMScript.bind(v195, v194);
  dnaSequence = v196();
  introspect(JAMScript.process) {
    var v197 = [dnaSequence, /1/g, "h"];
    var v198 = dnaSequence.replace
  }
  var v199 = JAMScript.bind(v198, v197);
  dnaSequence = v199();
  introspect(JAMScript.process) {
    var v200 = [dnaSequence, /2/g, "d"];
    var v201 = dnaSequence.replace
  }
  var v202 = JAMScript.bind(v201, v200);
  dnaSequence = v202();
  introspect(JAMScript.process) {
    var v203 = [dnaSequence, /D/g, "1"];
    var v204 = dnaSequence.replace
  }
  var v205 = JAMScript.bind(v204, v203);
  dnaSequence = v205();
  introspect(JAMScript.process) {
    var v206 = [dnaSequence, /H/g, "2"];
    var v207 = dnaSequence.replace
  }
  var v208 = JAMScript.bind(v207, v206);
  dnaSequence = v208();
  introspect(JAMScript.process) {
    var v209 = [dnaSequence, /1/g, "H"];
    var v210 = dnaSequence.replace
  }
  var v211 = JAMScript.bind(v210, v209);
  dnaSequence = v211();
  introspect(JAMScript.process) {
    var v212 = [dnaSequence, /2/g, "D"];
    var v213 = dnaSequence.replace
  }
  var v214 = JAMScript.bind(v213, v212);
  dnaSequence = v214();
  return dnaSequence
}
function closeForm() {
  var v138 = outputWindow.document;
  introspect(JAMScript.process) {
    var v215 = [v138, "</form>"];
    var v216 = v138.write
  }
  var v217 = JAMScript.bind(v216, v215);
  v217();
  return true
}
function closePre() {
  var v139 = outputWindow.document;
  introspect(JAMScript.process) {
    var v218 = [v139, "</div>"];
    var v219 = v139.write
  }
  var v220 = JAMScript.bind(v219, v218);
  v220();
  var v140 = outputWindow.document;
  introspect(JAMScript.process) {
    var v221 = [v140, "</pre>\n"];
    var v222 = v140.write
  }
  var v223 = JAMScript.bind(v222, v221);
  v223()
}
function closeTextArea() {
  var v141 = outputWindow.document;
  introspect(JAMScript.process) {
    var v224 = [v141, "</textarea>"];
    var v225 = v141.write
  }
  var v226 = JAMScript.bind(v225, v224);
  v226();
  return true
}
function closeWindow() {
  var v142 = outputWindow.document;
  introspect(JAMScript.process) {
    var v227 = [v142, "</body>\n</html>\n"];
    var v228 = v142.write
  }
  var v229 = JAMScript.bind(v228, v227);
  v229();
  outputWindow.status = "Done.";
  return true
}
function convertDegenerates(sequence$$1) {
  introspect(JAMScript.process) {
    var v233 = [sequence$$1];
    var v234 = sequence$$1.toLowerCase
  }
  var v235 = JAMScript.bind(v234, v233);
  sequence$$1 = v235();
  introspect(JAMScript.process) {
    var v236 = [sequence$$1, /t/g, "[TU]"];
    var v237 = sequence$$1.replace
  }
  var v238 = JAMScript.bind(v237, v236);
  sequence$$1 = v238();
  introspect(JAMScript.process) {
    var v239 = [sequence$$1, /r/g, "[AGR]"];
    var v240 = sequence$$1.replace
  }
  var v241 = JAMScript.bind(v240, v239);
  sequence$$1 = v241();
  introspect(JAMScript.process) {
    var v242 = [sequence$$1, /y/g, "[CTUY]"];
    var v243 = sequence$$1.replace
  }
  var v244 = JAMScript.bind(v243, v242);
  sequence$$1 = v244();
  introspect(JAMScript.process) {
    var v245 = [sequence$$1, /s/g, "[GCS]"];
    var v246 = sequence$$1.replace
  }
  var v247 = JAMScript.bind(v246, v245);
  sequence$$1 = v247();
  introspect(JAMScript.process) {
    var v248 = [sequence$$1, /w/g, "[ATUW]"];
    var v249 = sequence$$1.replace
  }
  var v250 = JAMScript.bind(v249, v248);
  sequence$$1 = v250();
  introspect(JAMScript.process) {
    var v251 = [sequence$$1, /k/g, "[GTUK]"];
    var v252 = sequence$$1.replace
  }
  var v253 = JAMScript.bind(v252, v251);
  sequence$$1 = v253();
  introspect(JAMScript.process) {
    var v254 = [sequence$$1, /m/g, "[ACM]"];
    var v255 = sequence$$1.replace
  }
  var v256 = JAMScript.bind(v255, v254);
  sequence$$1 = v256();
  introspect(JAMScript.process) {
    var v257 = [sequence$$1, /b/g, "[CGTUBSKY]"];
    var v258 = sequence$$1.replace
  }
  var v259 = JAMScript.bind(v258, v257);
  sequence$$1 = v259();
  introspect(JAMScript.process) {
    var v260 = [sequence$$1, /d/g, "[AGTUDRKW]"];
    var v261 = sequence$$1.replace
  }
  var v262 = JAMScript.bind(v261, v260);
  sequence$$1 = v262();
  introspect(JAMScript.process) {
    var v263 = [sequence$$1, /h/g, "[ACTUHMYW]"];
    var v264 = sequence$$1.replace
  }
  var v265 = JAMScript.bind(v264, v263);
  sequence$$1 = v265();
  introspect(JAMScript.process) {
    var v266 = [sequence$$1, /v/g, "[ACGVSMR]"];
    var v267 = sequence$$1.replace
  }
  var v268 = JAMScript.bind(v267, v266);
  sequence$$1 = v268();
  introspect(JAMScript.process) {
    var v269 = [sequence$$1, /n/g, "[ACGTURYSWKMBDHVN]"];
    var v270 = sequence$$1.replace
  }
  var v271 = JAMScript.bind(v270, v269);
  sequence$$1 = v271();
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v144 = alignArray.length;
  var v145 = v144 < 3;
  if(v145) {
    alert("There is a problem with the alignment format 814.");
    return false
  }
  var i$$4 = 1;
  var v146 = alignArray.length;
  var v14 = i$$4 < v146;
  for(;v14;) {
    var v147 = alignArray[i$$4];
    introspect(JAMScript.process) {
      var v272 = [v147, /[^\s]+\s/];
      var v273 = v147.search
    }
    var v274 = JAMScript.bind(v273, v272);
    var v148 = v274();
    var v149 = v148 == -1;
    if(v149) {
      alert("There is a problem with the alignment format 830.");
      return false
    }
    i$$4++;
    var v150 = alignArray.length;
    v14 = i$$4 < v150
  }
  return true
}
function filterAlignSeq(alignSeq) {
  introspect(JAMScript.process) {
    var v275 = [alignSeq, /[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""];
    var v276 = alignSeq.replace
  }
  var v277 = JAMScript.bind(v276, v275);
  alignSeq = v277();
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAMScript.process) {
    var v278 = [sequenceTitle, /\s{2,}/g, " "];
    var v279 = sequenceTitle.replace
  }
  var v280 = JAMScript.bind(v279, v278);
  sequenceTitle = v280();
  introspect(JAMScript.process) {
    var v281 = [sequenceTitle, /^\s*/g, ""];
    var v282 = sequenceTitle.replace
  }
  var v283 = JAMScript.bind(v282, v281);
  sequenceTitle = v283();
  introspect(JAMScript.process) {
    var v284 = [sequenceTitle, /[\f\n\r\t]+$/g, "\n"];
    var v285 = sequenceTitle.replace
  }
  var v286 = JAMScript.bind(v285, v284);
  sequenceTitle = v286();
  introspect(JAMScript.process) {
    var v287 = [sequenceTitle, /[\<\>]\n/gi, ""];
    var v288 = sequenceTitle.replace
  }
  var v289 = JAMScript.bind(v288, v287);
  var v151 = v289();
  return v151
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAMScript.process) {
    var v290 = [sequenceData, /\>[^\f\n\r]+[\f\n\r]/];
    var v291 = sequenceData.search
  }
  var v292 = JAMScript.bind(v291, v290);
  var v152 = v292();
  var v153 = v152 != -1;
  if(v153) {
    introspect(JAMScript.process) {
      var v293 = [re$$1, sequenceData];
      var v294 = re$$1.exec
    }
    var v295 = JAMScript.bind(v294, v293);
    var v15 = matchArray = v295();
    for(;v15;) {
      var v154 = matchArray[0];
      introspect(JAMScript.process) {
        var v296 = [arrayOfFasta, v154];
        var v297 = arrayOfFasta.push
      }
      var v298 = JAMScript.bind(v297, v296);
      v298();
      introspect(JAMScript.process) {
        var v299 = [re$$1, sequenceData];
        var v300 = re$$1.exec
      }
      var v301 = JAMScript.bind(v300, v299);
      matchArray = v301();
      v15 = matchArray
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v155 = sequence$$2.length;
  var v156 = "&gt;results for " + v155;
  var stringToReturn = v156 + " residue sequence ";
  introspect(JAMScript.process) {
    var v302 = [fastaSequenceTitle, /[^\s]/];
    var v303 = fastaSequenceTitle.search
  }
  var v304 = JAMScript.bind(v303, v302);
  var v157 = v304();
  var v158 = v157 != -1;
  if(v158) {
    var v159 = stringToReturn + '"';
    var v160 = v159 + fastaSequenceTitle;
    stringToReturn = v160 + '"'
  }
  var v161 = stringToReturn + ' starting "';
  introspect(JAMScript.process) {
    var v305 = [sequence$$2, 0, 10];
    var v306 = sequence$$2.substring
  }
  var v307 = JAMScript.bind(v306, v305);
  var v162 = v307();
  var v163 = v161 + v162;
  stringToReturn = v163 + '"';
  var v164 = stringToReturn + "\n";
  return v164
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v165 = sequenceOne.length;
  var v166 = "Search results for " + v165;
  var stringToReturn$$1 = v166 + " residue sequence ";
  introspect(JAMScript.process) {
    var v308 = [fastaSequenceTitleOne, /[^\s]/];
    var v309 = fastaSequenceTitleOne.search
  }
  var v310 = JAMScript.bind(v309, v308);
  var v167 = v310();
  var v168 = v167 != -1;
  if(v168) {
    var v169 = stringToReturn$$1 + '"';
    var v170 = v169 + fastaSequenceTitleOne;
    stringToReturn$$1 = v170 + '"'
  }
  var v171 = stringToReturn$$1 + ' starting "';
  introspect(JAMScript.process) {
    var v311 = [sequenceOne, 0, 10];
    var v312 = sequenceOne.substring
  }
  var v313 = JAMScript.bind(v312, v311);
  var v172 = v313();
  var v173 = v171 + v172;
  stringToReturn$$1 = v173 + '"\n';
  var v174 = stringToReturn$$1 + "and ";
  var v175 = sequenceTwo.length;
  var v176 = v174 + v175;
  stringToReturn$$1 = v176 + " residue sequence ";
  introspect(JAMScript.process) {
    var v314 = [fastaSequenceTitleTwo, /[^\s]/];
    var v315 = fastaSequenceTitleTwo.search
  }
  var v316 = JAMScript.bind(v315, v314);
  var v177 = v316();
  var v178 = v177 != -1;
  if(v178) {
    var v179 = stringToReturn$$1 + '"';
    var v180 = v179 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v180 + '"'
  }
  var v181 = stringToReturn$$1 + ' starting "';
  introspect(JAMScript.process) {
    var v317 = [sequenceTwo, 0, 10];
    var v318 = sequenceTwo.substring
  }
  var v319 = JAMScript.bind(v318, v317);
  var v182 = v319();
  var v183 = v181 + v182;
  stringToReturn$$1 = v183 + '"';
  var v184 = '<div class="info">' + stringToReturn$$1;
  var v185 = v184 + "</div>\n";
  return v185
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v186 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v186);
  var j$$2 = 0;
  var v187 = arrayOfPatterns$$3.length;
  var v16 = j$$2 < v187;
  for(;v16;) {
    var v188 = arrayOfPatterns$$3[j$$2];
    introspect(JAMScript.process) {
      var v320 = [v188, /\/.+\//];
      var v321 = v188.match
    }
    var v322 = JAMScript.bind(v321, v320);
    var v189 = v322();
    var v190 = v189 + "gi";
    var v323 = JAMScript.bind(eval, [null, v190]);
    var v191 = v323();
    geneticCodeMatchExp$$1[j$$2] = v191;
    j$$2++;
    var v192 = arrayOfPatterns$$3.length;
    v16 = j$$2 < v192
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v193 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v193);
  var j$$3 = 0;
  var v194 = arrayOfPatterns$$4.length;
  var v17 = j$$3 < v194;
  for(;v17;) {
    var v195 = arrayOfPatterns$$4[j$$3];
    introspect(JAMScript.process) {
      var v324 = [v195, /=[a-zA-Z\*]/];
      var v325 = v195.match
    }
    var v326 = JAMScript.bind(v325, v324);
    var v196 = v326();
    introspect(JAMScript.process) {
      var v327 = [v196];
      var v328 = v196.toString
    }
    var v329 = JAMScript.bind(v328, v327);
    var v197 = v329();
    geneticCodeMatchResult$$1[j$$3] = v197;
    var v198 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAMScript.process) {
      var v330 = [v198, /=/g, ""];
      var v331 = v198.replace
    }
    var v332 = JAMScript.bind(v331, v330);
    var v199 = v332();
    geneticCodeMatchResult$$1[j$$3] = v199;
    j$$3++;
    var v200 = arrayOfPatterns$$4.length;
    v17 = j$$3 < v200
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v201 = sequence$$3.length;
  var v202 = "Results for " + v201;
  var stringToReturn$$2 = v202 + " residue sequence ";
  introspect(JAMScript.process) {
    var v333 = [fastaSequenceTitle$$1, /[^\s]/];
    var v334 = fastaSequenceTitle$$1.search
  }
  var v335 = JAMScript.bind(v334, v333);
  var v203 = v335();
  var v204 = v203 != -1;
  if(v204) {
    var v205 = stringToReturn$$2 + '"';
    var v206 = v205 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v206 + '"'
  }
  var v207 = stringToReturn$$2 + ' starting "';
  introspect(JAMScript.process) {
    var v336 = [sequence$$3, 0, 10];
    var v337 = sequence$$3.substring
  }
  var v338 = JAMScript.bind(v337, v336);
  var v208 = v338();
  var v209 = v207 + v208;
  stringToReturn$$2 = v209 + '"';
  var v210 = '<div class="info">' + stringToReturn$$2;
  var v211 = v210 + "</div>\n";
  return v211
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v212 = "Results for " + topology;
  var v213 = v212 + " ";
  var v214 = sequence$$4.length;
  var v215 = v213 + v214;
  var stringToReturn$$3 = v215 + " residue sequence ";
  introspect(JAMScript.process) {
    var v339 = [fastaSequenceTitle$$2, /[^\s]/];
    var v340 = fastaSequenceTitle$$2.search
  }
  var v341 = JAMScript.bind(v340, v339);
  var v216 = v341();
  var v217 = v216 != -1;
  if(v217) {
    var v218 = stringToReturn$$3 + '"';
    var v219 = v218 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v219 + '"'
  }
  var v220 = stringToReturn$$3 + ' starting "';
  introspect(JAMScript.process) {
    var v342 = [sequence$$4, 0, 10];
    var v343 = sequence$$4.substring
  }
  var v344 = JAMScript.bind(v343, v342);
  var v221 = v344();
  var v222 = v220 + v221;
  stringToReturn$$3 = v222 + '"';
  var v223 = '<div class="info">' + stringToReturn$$3;
  var v224 = v223 + "</div>\n";
  return v224
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v225 = sequenceOne$$1.length;
  var v226 = "Alignment results for " + v225;
  var stringToReturn$$4 = v226 + " residue sequence ";
  introspect(JAMScript.process) {
    var v345 = [fastaSequenceTitleOne$$1, /[^\s]/];
    var v346 = fastaSequenceTitleOne$$1.search
  }
  var v347 = JAMScript.bind(v346, v345);
  var v227 = v347();
  var v228 = v227 != -1;
  if(v228) {
    var v229 = stringToReturn$$4 + '"';
    var v230 = v229 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v230 + '"'
  }
  var v231 = stringToReturn$$4 + ' starting "';
  introspect(JAMScript.process) {
    var v348 = [sequenceOne$$1, 0, 10];
    var v349 = sequenceOne$$1.substring
  }
  var v350 = JAMScript.bind(v349, v348);
  var v232 = v350();
  var v233 = v231 + v232;
  stringToReturn$$4 = v233 + '"\n';
  var v234 = stringToReturn$$4 + "and ";
  var v235 = sequenceTwo$$1.length;
  var v236 = v234 + v235;
  stringToReturn$$4 = v236 + " residue sequence ";
  introspect(JAMScript.process) {
    var v351 = [fastaSequenceTitleTwo$$1, /[^\s]/];
    var v352 = fastaSequenceTitleTwo$$1.search
  }
  var v353 = JAMScript.bind(v352, v351);
  var v237 = v353();
  var v238 = v237 != -1;
  if(v238) {
    var v239 = stringToReturn$$4 + '"';
    var v240 = v239 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v240 + '"'
  }
  var v241 = stringToReturn$$4 + ' starting "';
  introspect(JAMScript.process) {
    var v354 = [sequenceTwo$$1, 0, 10];
    var v355 = sequenceTwo$$1.substring
  }
  var v356 = JAMScript.bind(v355, v354);
  var v242 = v356();
  var v243 = v241 + v242;
  stringToReturn$$4 = v243 + '"';
  var v244 = '<div class="info">' + stringToReturn$$4;
  var v245 = v244 + "</div>\n";
  return v245
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v18 = j$$4 < lengthOut;
  for(;v18;) {
    introspect(JAMScript.process) {
      var v357 = [Math];
      var v358 = Math.random
    }
    var v359 = JAMScript.bind(v358, v357);
    var v246 = v359();
    var v247 = components.length;
    var v248 = v246 * v247;
    introspect(JAMScript.process) {
      var v360 = [Math, v248];
      var v361 = Math.floor
    }
    var v362 = JAMScript.bind(v361, v360);
    tempNum = v362();
    var v249 = components[tempNum];
    tempChar = v249;
    introspect(JAMScript.process) {
      var v363 = [sequenceArray, tempChar];
      var v364 = sequenceArray.push
    }
    var v365 = JAMScript.bind(v364, v363);
    v365();
    j$$4++;
    v18 = j$$4 < lengthOut
  }
  introspect(JAMScript.process) {
    var v366 = [sequenceArray, ""];
    var v367 = sequenceArray.join
  }
  var v368 = JAMScript.bind(v367, v366);
  var v250 = v368();
  return v250
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAMScript.process) {
    var v369 = [sequenceRecord, /\>[^\f\n\r]+[\f\n\r]/];
    var v370 = sequenceRecord.search
  }
  var v371 = JAMScript.bind(v370, v369);
  var v251 = v371();
  var v252 = v251 != -1;
  if(v252) {
    introspect(JAMScript.process) {
      var v372 = [sequenceRecord, /\>[^\f\n\r]+[\f\n\r]/, ""];
      var v373 = sequenceRecord.replace
    }
    var v374 = JAMScript.bind(v373, v372);
    sequenceRecord = v374()
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAMScript.process) {
    var v375 = [sequenceRecord$$1, /\>[^\f\n\r]+[\f\n\r]/];
    var v376 = sequenceRecord$$1.search
  }
  var v377 = JAMScript.bind(v376, v375);
  var v253 = v377();
  var v254 = v253 != -1;
  if(v254) {
    introspect(JAMScript.process) {
      var v378 = [sequenceRecord$$1, /\>[^\f\n\r]+[\f\n\r]/, ""];
      var v379 = sequenceRecord$$1.match
    }
    var v380 = JAMScript.bind(v379, v378);
    var v255 = v380();
    introspect(JAMScript.process) {
      var v381 = [v255];
      var v382 = v255.toString
    }
    var v383 = JAMScript.bind(v382, v381);
    fastaTitle = v383();
    introspect(JAMScript.process) {
      var v384 = [fastaTitle, /\>|[\f\n\r]/g, ""];
      var v385 = fastaTitle.replace
    }
    var v386 = JAMScript.bind(v385, v384);
    fastaTitle = v386();
    introspect(JAMScript.process) {
      var v387 = [fastaTitle, /\s{2,}/g, " "];
      var v388 = fastaTitle.replace
    }
    var v389 = JAMScript.bind(v388, v387);
    fastaTitle = v389();
    introspect(JAMScript.process) {
      var v390 = [fastaTitle, /[\<\>]/gi, ""];
      var v391 = fastaTitle.replace
    }
    var v392 = JAMScript.bind(v391, v390);
    fastaTitle = v392()
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAMScript.process) {
    var v393 = [expressionToCheck, /\[[A-Za-z\|]*\[/];
    var v394 = expressionToCheck.search
  }
  var v395 = JAMScript.bind(v394, v393);
  var v256 = v395();
  var v42 = v256 != -1;
  var v257 = !v42;
  if(v257) {
    introspect(JAMScript.process) {
      var v396 = [expressionToCheck, /\][A-Za-z\|]*\]/];
      var v397 = expressionToCheck.search
    }
    var v398 = JAMScript.bind(v397, v396);
    var v772 = v398();
    var v759 = v772 != -1;
    var v773 = !v759;
    if(v773) {
      introspect(JAMScript.process) {
        var v399 = [expressionToCheck, /\[\]/];
        var v400 = expressionToCheck.search
      }
      var v401 = JAMScript.bind(v400, v399);
      var v791 = v401();
      var v784 = v791 != -1;
      var v792 = !v784;
      if(v792) {
        introspect(JAMScript.process) {
          var v402 = [expressionToCheck, /\/[A-Za-z\|]*\]/];
          var v403 = expressionToCheck.search
        }
        var v404 = JAMScript.bind(v403, v402);
        var v810 = v404();
        var v806 = v810 != -1;
        var v811 = !v806;
        if(v811) {
          introspect(JAMScript.process) {
            var v405 = [expressionToCheck, /\[[A-Za-z\|]*\//];
            var v406 = expressionToCheck.search
          }
          var v407 = JAMScript.bind(v406, v405);
          var v813 = v407();
          var v812 = v813 != -1;
          var v814 = !v812;
          if(v814) {
            introspect(JAMScript.process) {
              var v408 = [expressionToCheck, /\|\|/];
              var v409 = expressionToCheck.search
            }
            var v410 = JAMScript.bind(v409, v408);
            var v816 = v410();
            var v815 = v816 != -1;
            var v817 = !v815;
            if(v817) {
              introspect(JAMScript.process) {
                var v411 = [expressionToCheck, /\/\|/];
                var v412 = expressionToCheck.search
              }
              var v413 = JAMScript.bind(v412, v411);
              var v819 = v413();
              var v818 = v819 != -1;
              var v820 = !v818;
              if(v820) {
                introspect(JAMScript.process) {
                  var v414 = [expressionToCheck, /\|\//];
                  var v415 = expressionToCheck.search
                }
                var v416 = JAMScript.bind(v415, v414);
                var v822 = v416();
                var v821 = v822 != -1;
                var v823 = !v821;
                if(v823) {
                  introspect(JAMScript.process) {
                    var v417 = [expressionToCheck, /\[.\]/];
                    var v418 = expressionToCheck.search
                  }
                  var v419 = JAMScript.bind(v418, v417);
                  var v825 = v419();
                  var v824 = v825 != -1;
                  var v826 = !v824;
                  if(v826) {
                    introspect(JAMScript.process) {
                      var v420 = [expressionToCheck, /\</];
                      var v421 = expressionToCheck.search
                    }
                    var v422 = JAMScript.bind(v421, v420);
                    var v828 = v422();
                    var v827 = v828 != -1;
                    var v829 = !v827;
                    if(v829) {
                      introspect(JAMScript.process) {
                        var v423 = [expressionToCheck, /\>/];
                        var v424 = expressionToCheck.search
                      }
                      var v425 = JAMScript.bind(v424, v423);
                      var v830 = v425();
                      v827 = v830 != -1
                    }
                    v824 = v827
                  }
                  v821 = v824
                }
                v818 = v821
              }
              v815 = v818
            }
            v812 = v815
          }
          v806 = v812
        }
        v784 = v806
      }
      v759 = v784
    }
    v42 = v759
  }
  if(v42) {
    return false
  }
  return true
}
function openForm() {
  var v258 = outputWindow.document;
  introspect(JAMScript.process) {
    var v426 = [v258, '<form action="">\n'];
    var v427 = v258.write
  }
  var v428 = JAMScript.bind(v427, v426);
  v428();
  return true
}
function openPre() {
  var v259 = outputWindow.document;
  introspect(JAMScript.process) {
    var v429 = [v259, "<pre>"];
    var v430 = v259.write
  }
  var v431 = JAMScript.bind(v430, v429);
  v431();
  var v260 = outputWindow.document;
  introspect(JAMScript.process) {
    var v432 = [v260, '<div class="pre">'];
    var v433 = v260.write
  }
  var v434 = JAMScript.bind(v433, v432);
  v434()
}
function openTextArea() {
  var v261 = outputWindow.document;
  introspect(JAMScript.process) {
    var v435 = [v261, '<br /><textarea rows="6" cols="61">\n'];
    var v436 = v261.write
  }
  var v437 = JAMScript.bind(v436, v435);
  v437();
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true)
}
function _openWindow(title$$6, isColor) {
  outputWindow = { document: { write: print } };
  var v262 = outputWindow.document;
  var v263 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v264 = v263 + "<head>\n";
  var v265 = v264 + "<title>Sequence Manipulation Suite</title>\n";
  var v266 = v265 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAMScript.process) {
    var v444 = [v262, v266];
    var v445 = v262.write
  }
  var v446 = JAMScript.bind(v445, v444);
  v446();
  if(isColor) {
    var v267 = outputWindow.document;
    var v268 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v269 = v268 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v270 = v269 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v271 = v270 + "div.info {font-weight: bold}\n";
    var v272 = v271 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v273 = v272 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v274 = v273 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v275 = v274 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v276 = v275 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v277 = v276 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v278 = v277 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v279 = v278 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v280 = v279 + "td.many {color: #000000}\n";
    var v281 = v280 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v282 = v281 + "</style>\n";
    introspect(JAMScript.process) {
      var v447 = [v267, v282];
      var v448 = v267.write
    }
    var v449 = JAMScript.bind(v448, v447);
    v449()
  }else {
    var v283 = outputWindow.document;
    var v284 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v285 = v284 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v286 = v285 + "div.title {display: none}\n";
    var v287 = v286 + "div.info {font-weight: bold}\n";
    var v288 = v287 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v289 = v288 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v290 = v289 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v291 = v290 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v292 = v291 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v293 = v292 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v294 = v293 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v295 = v294 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v296 = v295 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v297 = v296 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v298 = v297 + "img {display: none}\n";
    var v299 = v298 + "</style>\n";
    introspect(JAMScript.process) {
      var v450 = [v283, v299];
      var v451 = v283.write
    }
    var v452 = JAMScript.bind(v451, v450);
    v452()
  }
  var v300 = outputWindow.document;
  var v301 = "</head>\n" + '<body class="main">\n';
  var v302 = v301 + '<div class="title">';
  var v303 = v302 + title$$6;
  var v304 = v303 + " results</div>\n";
  introspect(JAMScript.process) {
    var v453 = [v300, v304];
    var v454 = v300.write
  }
  var v455 = JAMScript.bind(v454, v453);
  v455();
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true)
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = { document: { write: print } };
  var v305 = outputWindow.document;
  var v306 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v307 = v306 + "<head>\n";
  var v308 = v307 + "<title>Sequence Manipulation Suite</title>\n";
  var v309 = v308 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAMScript.process) {
    var v462 = [v305, v309];
    var v463 = v305.write
  }
  var v464 = JAMScript.bind(v463, v462);
  v464();
  if(isBackground) {
    var v310 = outputWindow.document;
    var v311 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v312 = v311 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v313 = v312 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v314 = v313 + "div.info {font-weight: bold}\n";
    var v315 = v314 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v316 = v315 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v317 = v316 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v318 = v317 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v319 = v318 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v320 = v319 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v321 = v320 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v322 = v321 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v323 = v322 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v324 = v323 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v325 = v324 + "</style>\n";
    introspect(JAMScript.process) {
      var v465 = [v310, v325];
      var v466 = v310.write
    }
    var v467 = JAMScript.bind(v466, v465);
    v467()
  }else {
    var v326 = outputWindow.document;
    var v327 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v328 = v327 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v329 = v328 + "div.title {display: none}\n";
    var v330 = v329 + "div.info {font-weight: bold}\n";
    var v331 = v330 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v332 = v331 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v333 = v332 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v334 = v333 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v335 = v334 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v336 = v335 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v337 = v336 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v338 = v337 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v339 = v338 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v340 = v339 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v341 = v340 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v342 = v341 + "img {display: none}\n";
    var v343 = v342 + "</style>\n";
    introspect(JAMScript.process) {
      var v468 = [v326, v343];
      var v469 = v326.write
    }
    var v470 = JAMScript.bind(v469, v468);
    v470()
  }
  var v344 = outputWindow.document;
  var v345 = "</head>\n" + '<body class="main">\n';
  var v346 = v345 + '<div class="title">';
  var v347 = v346 + title$$8;
  var v348 = v347 + " results</div>\n";
  introspect(JAMScript.process) {
    var v471 = [v344, v348];
    var v472 = v344.write
  }
  var v473 = JAMScript.bind(v472, v471);
  v473();
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  introspect(JAMScript.process) {
    var v474 = [sequence$$5, /[\d\s]/g, ""];
    var v475 = sequence$$5.replace
  }
  var v476 = JAMScript.bind(v475, v474);
  var v349 = v476();
  return v349
}
function removeNonDna(sequence$$6) {
  introspect(JAMScript.process) {
    var v477 = [sequence$$6, /[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""];
    var v478 = sequence$$6.replace
  }
  var v479 = JAMScript.bind(v478, v477);
  var v350 = v479();
  return v350
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAMScript.process) {
    var v480 = [sequence$$7, /[^gatucGATUC]/g, ""];
    var v481 = sequence$$7.replace
  }
  var v482 = JAMScript.bind(v481, v480);
  var v351 = v482();
  return v351
}
function removeNonProtein(sequence$$8) {
  introspect(JAMScript.process) {
    var v483 = [sequence$$8, /[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""];
    var v484 = sequence$$8.replace
  }
  var v485 = JAMScript.bind(v484, v483);
  var v352 = v485();
  return v352
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAMScript.process) {
    var v486 = [sequence$$9, /[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""];
    var v487 = sequence$$9.replace
  }
  var v488 = JAMScript.bind(v487, v486);
  var v353 = v488();
  return v353
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAMScript.process) {
    var v489 = [sequence$$10, /[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""];
    var v490 = sequence$$10.replace
  }
  var v491 = JAMScript.bind(v490, v489);
  var v354 = v491();
  return v354
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAMScript.process) {
    var v492 = [sequence$$11, /[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""];
    var v493 = sequence$$11.replace
  }
  var v494 = JAMScript.bind(v493, v492);
  var v355 = v494();
  return v355
}
function removeWhiteSpace(text$$9) {
  introspect(JAMScript.process) {
    var v495 = [text$$9, /\s/g, ""];
    var v496 = text$$9.replace
  }
  var v497 = JAMScript.bind(v496, v495);
  var v356 = v497();
  return v356
}
function removeNonLetters(sequence$$12) {
  introspect(JAMScript.process) {
    var v498 = [sequence$$12, /[^A-Z]/gi, ""];
    var v499 = sequence$$12.replace
  }
  var v500 = JAMScript.bind(v499, v498);
  var v357 = v500();
  return v357
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAMScript.process) {
    var v501 = [dnaSequence$$1, /./];
    var v502 = dnaSequence$$1.search
  }
  var v503 = JAMScript.bind(v502, v501);
  var v358 = v503();
  var v359 = v358 != -1;
  if(v359) {
    introspect(JAMScript.process) {
      var v504 = [dnaSequence$$1, /./g];
      var v505 = dnaSequence$$1.match
    }
    var v506 = JAMScript.bind(v505, v504);
    tempDnaArray = v506();
    introspect(JAMScript.process) {
      var v507 = [tempDnaArray];
      var v508 = tempDnaArray.reverse
    }
    var v509 = JAMScript.bind(v508, v507);
    tempDnaArray = v509();
    introspect(JAMScript.process) {
      var v510 = [tempDnaArray, ""];
      var v511 = tempDnaArray.join
    }
    var v512 = JAMScript.bind(v511, v510);
    dnaSequence$$1 = v512()
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  introspect(JAMScript.process) {
    var v513 = [theNumber];
    var v514 = theNumber.toString
  }
  var v515 = JAMScript.bind(v514, v513);
  theNumber = v515();
  var v360 = theNumber.length;
  j$$5 = v360;
  var v19 = j$$5 < lengthOfColumn;
  for(;v19;) {
    tempString = tempString + " ";
    j$$5++;
    v19 = j$$5 < lengthOfColumn
  }
  var v361 = tempString + theNumber;
  theNumber = v361 + " ";
  var v362 = sequenceToAppend + theNumber;
  sequenceToAppend = v362 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    var v368 = p1$$1 + "X";
    return v368
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAMScript.process) {
    var v516 = [testArray, testString];
    var v517 = testArray.push
  }
  var v518 = JAMScript.bind(v517, v516);
  v518();
  var v363 = testArray[0];
  var v364 = v363 != testString;
  if(v364) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAMScript.process) {
    var v519 = [testString, re$$2];
    var v520 = testString.search
  }
  var v521 = JAMScript.bind(v520, v519);
  var v365 = v521();
  var v366 = v365 == -1;
  if(v366) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    var v522 = JAMScript.bind(eval, [null, "Exception handling not supported. Check browser compatibility page."]);
    re$$2 = v522()
  }catch(e$$12) {
    caughtException = true
  }
  var v367 = !caughtException;
  if(v367) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  introspect(JAMScript.process) {
    var v523 = [testString, /(\d)/g, v1];
    var v524 = testString.replace
  }
  var v525 = JAMScript.bind(v524, v523);
  testString = v525();
  var v369 = testString != "1X2X3X";
  if(v369) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  introspect(JAMScript.process) {
    var v526 = [testNum, 3];
    var v527 = testNum.toFixed
  }
  var v528 = JAMScript.bind(v527, v526);
  var v370 = v528();
  var v371 = v370 != 2489.824;
  if(v371) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  introspect(JAMScript.process) {
    var v529 = [testNum, 5];
    var v530 = testNum.toPrecision
  }
  var v531 = JAMScript.bind(v530, v529);
  var v372 = v531();
  var v373 = v372 != 2489.8;
  if(v373) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  introspect(JAMScript.process) {
    var v532 = [theNumber$$1, /\d/];
    var v533 = theNumber$$1.search
  }
  var v534 = JAMScript.bind(v533, v532);
  var v374 = v534();
  var v375 = v374 == -1;
  if(v375) {
    alert("Please enter a number");
    return false
  }
}
function verifyEmbl(emblFile) {
  introspect(JAMScript.process) {
    var v535 = [emblFile, /ID/];
    var v536 = emblFile.search
  }
  var v537 = JAMScript.bind(v536, v535);
  var v376 = v537();
  var v43 = v376 == -1;
  var v377 = !v43;
  if(v377) {
    introspect(JAMScript.process) {
      var v538 = [emblFile, /AC/];
      var v539 = emblFile.search
    }
    var v540 = JAMScript.bind(v539, v538);
    var v774 = v540();
    var v760 = v774 == -1;
    var v775 = !v760;
    if(v775) {
      introspect(JAMScript.process) {
        var v541 = [emblFile, /DE/];
        var v542 = emblFile.search
      }
      var v543 = JAMScript.bind(v542, v541);
      var v793 = v543();
      var v785 = v793 == -1;
      var v794 = !v785;
      if(v794) {
        introspect(JAMScript.process) {
          var v544 = [emblFile, /SQ/];
          var v545 = emblFile.search
        }
        var v546 = JAMScript.bind(v545, v544);
        var v795 = v546();
        v785 = v795 == -1
      }
      v760 = v785
    }
    v43 = v760
  }
  if(v43) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAMScript.process) {
    var v547 = [theNumber$$2, /\d/];
    var v548 = theNumber$$2.search
  }
  var v549 = JAMScript.bind(v548, v547);
  var v378 = v549();
  var v379 = v378 == -1;
  if(v379) {
    alert("Please enter a number.");
    return false
  }
  var v380 = theNumber$$2 > maxInput$$2;
  if(v380) {
    var v381 = "Please enter a number less than or equal to " + maxInput$$2;
    var v382 = v381 + ".";
    alert(v382);
    return false
  }
}
function verifyDna(dnaSequence$$2) {
  introspect(JAMScript.process) {
    var v550 = [dnaSequence$$2, /[^gatucryswkmbdhvnx\s]/i];
    var v551 = dnaSequence$$2.search
  }
  var v552 = JAMScript.bind(v551, v550);
  var v383 = v552();
  var v384 = v383 != -1;
  if(v384) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  introspect(JAMScript.process) {
    var v553 = [proteinSequence, /[^acdefghiklmnpqrstvwyz\*\s]/i];
    var v554 = proteinSequence.search
  }
  var v555 = JAMScript.bind(v554, v553);
  var v385 = v555();
  var v386 = v385 != -1;
  if(v386) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  introspect(JAMScript.process) {
    var v556 = [genBankFile, /LOCUS/];
    var v557 = genBankFile.search
  }
  var v558 = JAMScript.bind(v557, v556);
  var v387 = v558();
  var v44 = v387 == -1;
  var v388 = !v44;
  if(v388) {
    introspect(JAMScript.process) {
      var v559 = [genBankFile, /DEFINITION/];
      var v560 = genBankFile.search
    }
    var v561 = JAMScript.bind(v560, v559);
    var v776 = v561();
    var v761 = v776 == -1;
    var v777 = !v761;
    if(v777) {
      introspect(JAMScript.process) {
        var v562 = [genBankFile, /ACCESSION/];
        var v563 = genBankFile.search
      }
      var v564 = JAMScript.bind(v563, v562);
      var v796 = v564();
      var v786 = v796 == -1;
      var v797 = !v786;
      if(v797) {
        introspect(JAMScript.process) {
          var v565 = [genBankFile, /ORIGIN/];
          var v566 = genBankFile.search
        }
        var v567 = JAMScript.bind(v566, v565);
        var v798 = v567();
        v786 = v798 == -1
      }
      v761 = v786
    }
    v44 = v761
  }
  if(v44) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAMScript.process) {
    var v568 = [genBankFile$$1, /LOCUS/];
    var v569 = genBankFile$$1.search
  }
  var v570 = JAMScript.bind(v569, v568);
  var v389 = v570();
  var v45 = v389 == -1;
  var v390 = !v45;
  if(v390) {
    introspect(JAMScript.process) {
      var v571 = [genBankFile$$1, /DEFINITION/];
      var v572 = genBankFile$$1.search
    }
    var v573 = JAMScript.bind(v572, v571);
    var v778 = v573();
    var v762 = v778 == -1;
    var v779 = !v762;
    if(v779) {
      introspect(JAMScript.process) {
        var v574 = [genBankFile$$1, /ACCESSION/];
        var v575 = genBankFile$$1.search
      }
      var v576 = JAMScript.bind(v575, v574);
      var v799 = v576();
      var v787 = v799 == -1;
      var v800 = !v787;
      if(v800) {
        introspect(JAMScript.process) {
          var v577 = [genBankFile$$1, /ORIGIN/];
          var v578 = genBankFile$$1.search
        }
        var v579 = JAMScript.bind(v578, v577);
        var v801 = v579();
        v787 = v801 == -1
      }
      v762 = v787
    }
    v45 = v762
  }
  if(v45) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  introspect(JAMScript.process) {
    var v580 = [genBankFile$$1, /FEATURES {13}/];
    var v581 = genBankFile$$1.search
  }
  var v582 = JAMScript.bind(v581, v580);
  var v391 = v582();
  var v392 = v391 == -1;
  if(v392) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAMScript.process) {
    var v583 = [emblFile$$1, /ID/];
    var v584 = emblFile$$1.search
  }
  var v585 = JAMScript.bind(v584, v583);
  var v393 = v585();
  var v46 = v393 == -1;
  var v394 = !v46;
  if(v394) {
    introspect(JAMScript.process) {
      var v586 = [emblFile$$1, /AC/];
      var v587 = emblFile$$1.search
    }
    var v588 = JAMScript.bind(v587, v586);
    var v780 = v588();
    var v763 = v780 == -1;
    var v781 = !v763;
    if(v781) {
      introspect(JAMScript.process) {
        var v589 = [emblFile$$1, /DE/];
        var v590 = emblFile$$1.search
      }
      var v591 = JAMScript.bind(v590, v589);
      var v802 = v591();
      var v788 = v802 == -1;
      var v803 = !v788;
      if(v803) {
        introspect(JAMScript.process) {
          var v592 = [emblFile$$1, /SQ/];
          var v593 = emblFile$$1.search
        }
        var v594 = JAMScript.bind(v593, v592);
        var v804 = v594();
        v788 = v804 == -1
      }
      v763 = v788
    }
    v46 = v763
  }
  if(v46) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  introspect(JAMScript.process) {
    var v595 = [emblFile$$1, /^FT/m];
    var v596 = emblFile$$1.search
  }
  var v597 = JAMScript.bind(v596, v595);
  var v395 = v597();
  var v396 = v395 == -1;
  if(v396) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v22 = i$$5 < stopBase;
  for(;v22;) {
    var v397 = i$$5 + 1;
    lineOfText = rightNum(v397, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v398 = basePerLine / groupSize;
    var v21 = j$$6 <= v398;
    for(;v21;) {
      var v20 = k < groupSize;
      for(;v20;) {
        var v399 = k + i$$5;
        introspect(JAMScript.process) {
          var v598 = [text$$10, v399];
          var v599 = text$$10.charAt
        }
        var v600 = JAMScript.bind(v599, v598);
        var v400 = v600();
        lineOfText = lineOfText + v400;
        k = k + 1;
        v20 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v401 = basePerLine / groupSize;
      v21 = j$$6 <= v401
    }
    var v402 = outputWindow.document;
    var v403 = lineOfText + "\n";
    introspect(JAMScript.process) {
      var v601 = [v402, v403];
      var v602 = v402.write
    }
    var v603 = JAMScript.bind(v602, v601);
    v603();
    lineOfText = "";
    v22 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v50 = adjustment < 0;
    if(v50) {
      v50 = adjusted >= 0
    }
    if(v50) {
      adjusted++
    }
    return adjusted
  }
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v25 = i$$6 < stopBase$$2;
  for(;v25;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v404 = basePerLine$$2 / groupSize$$2;
    var v24 = j$$7 <= v404;
    for(;v24;) {
      var v23 = k$$1 < groupSize$$2;
      for(;v23;) {
        var v405 = i$$6 + k$$1;
        var v406 = v405 >= stopBase$$2;
        if(v406) {
          break
        }
        var v407 = k$$1 + i$$6;
        introspect(JAMScript.process) {
          var v604 = [text$$12, v407];
          var v605 = text$$12.charAt
        }
        var v606 = JAMScript.bind(v605, v604);
        var v408 = v606();
        lineOfText$$1 = lineOfText$$1 + v408;
        k$$1 = k$$1 + 1;
        v23 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v409 = numberPosition$$1 == "above";
      if(v409) {
        var v410 = adjustNumbering(i$$6, numberingAdjustment);
        var v411 = rightNum(v410, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v411
      }
      var v412 = i$$6 >= stopBase$$2;
      if(v412) {
        break
      }
      k$$1 = 0;
      j$$7++;
      var v413 = basePerLine$$2 / groupSize$$2;
      v24 = j$$7 <= v413
    }
    var v414 = numberPosition$$1 == "left";
    if(v414) {
      var v415 = outputWindow.document;
      var v416 = adjustNumbering(lineNum, numberingAdjustment);
      var v417 = rightNum(v416, "", 8, tabIn$$3);
      var v418 = v417 + lineOfText$$1;
      var v419 = v418 + "\n";
      introspect(JAMScript.process) {
        var v607 = [v415, v419];
        var v608 = v415.write
      }
      var v609 = JAMScript.bind(v608, v607);
      v609();
      var v420 = strands$$1 == "two";
      if(v420) {
        var v421 = outputWindow.document;
        var v422 = adjustNumbering(lineNum, numberingAdjustment);
        var v423 = rightNum(v422, "", 8, tabIn$$3);
        var v424 = complement(lineOfText$$1);
        var v425 = v423 + v424;
        var v426 = v425 + "\n";
        introspect(JAMScript.process) {
          var v610 = [v421, v426];
          var v611 = v421.write
        }
        var v612 = JAMScript.bind(v611, v610);
        v612();
        var v427 = outputWindow.document;
        introspect(JAMScript.process) {
          var v613 = [v427, "\n"];
          var v614 = v427.write
        }
        var v615 = JAMScript.bind(v614, v613);
        v615()
      }
    }else {
      var v428 = numberPosition$$1 == "right";
      if(v428) {
        var v429 = outputWindow.document;
        var v430 = adjustNumbering(i$$6, numberingAdjustment);
        var v431 = lineOfText$$1 + v430;
        var v432 = v431 + "\n";
        introspect(JAMScript.process) {
          var v616 = [v429, v432];
          var v617 = v429.write
        }
        var v618 = JAMScript.bind(v617, v616);
        v618();
        var v433 = strands$$1 == "two";
        if(v433) {
          var v434 = outputWindow.document;
          var v435 = complement(lineOfText$$1);
          var v436 = adjustNumbering(i$$6, numberingAdjustment);
          var v437 = v435 + v436;
          var v438 = v437 + "\n";
          introspect(JAMScript.process) {
            var v619 = [v434, v438];
            var v620 = v434.write
          }
          var v621 = JAMScript.bind(v620, v619);
          v621();
          var v439 = outputWindow.document;
          introspect(JAMScript.process) {
            var v622 = [v439, "\n"];
            var v623 = v439.write
          }
          var v624 = JAMScript.bind(v623, v622);
          v624()
        }
      }else {
        var v440 = numberPosition$$1 == "above";
        if(v440) {
          var v441 = outputWindow.document;
          var v442 = aboveNum + "\n";
          introspect(JAMScript.process) {
            var v625 = [v441, v442];
            var v626 = v441.write
          }
          var v627 = JAMScript.bind(v626, v625);
          v627();
          var v443 = outputWindow.document;
          var v444 = lineOfText$$1 + "\n";
          introspect(JAMScript.process) {
            var v628 = [v443, v444];
            var v629 = v443.write
          }
          var v630 = JAMScript.bind(v629, v628);
          v630();
          var v445 = strands$$1 == "two";
          if(v445) {
            var v446 = outputWindow.document;
            var v447 = complement(lineOfText$$1);
            var v448 = v447 + "\n";
            introspect(JAMScript.process) {
              var v631 = [v446, v448];
              var v632 = v446.write
            }
            var v633 = JAMScript.bind(v632, v631);
            v633();
            var v449 = outputWindow.document;
            introspect(JAMScript.process) {
              var v634 = [v449, "\n"];
              var v635 = v449.write
            }
            var v636 = JAMScript.bind(v635, v634);
            v636()
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v25 = i$$6 < stopBase$$2
  }
  return true
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
  var v28 = i$$7 < stopBase$$3;
  for(;v28;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v450 = basePerLine$$3 / groupSize$$3;
    var v27 = j$$8 <= v450;
    for(;v27;) {
      var v26 = k$$2 < groupSize$$3;
      for(;v26;) {
        var v451 = i$$7 + k$$2;
        var v452 = v451 >= stopBase$$3;
        if(v452) {
          break
        }
        var v453 = k$$2 + i$$7;
        introspect(JAMScript.process) {
          var v637 = [text$$13, v453];
          var v638 = text$$13.charAt
        }
        var v639 = JAMScript.bind(v638, v637);
        var v454 = v639();
        lineOfText$$2 = lineOfText$$2 + v454;
        k$$2 = k$$2 + 1;
        v26 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v455 = numberPosition$$2 == "above";
      if(v455) {
        var v456 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v456
      }
      var v457 = i$$7 >= stopBase$$3;
      if(v457) {
        break
      }
      k$$2 = 0;
      j$$8++;
      var v458 = basePerLine$$3 / groupSize$$3;
      v27 = j$$8 <= v458
    }
    var v459 = numberPosition$$2 == "left";
    if(v459) {
      var v460 = outputWindow.document;
      var v461 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v462 = v461 + lineOfText$$2;
      var v463 = v462 + "\n";
      introspect(JAMScript.process) {
        var v640 = [v460, v463];
        var v641 = v460.write
      }
      var v642 = JAMScript.bind(v641, v640);
      v642()
    }else {
      var v464 = numberPosition$$2 == "right";
      if(v464) {
        var v465 = outputWindow.document;
        var v466 = lineOfText$$2 + i$$7;
        var v467 = v466 + "\n";
        introspect(JAMScript.process) {
          var v643 = [v465, v467];
          var v644 = v465.write
        }
        var v645 = JAMScript.bind(v644, v643);
        v645()
      }else {
        var v468 = numberPosition$$2 == "above";
        if(v468) {
          var v469 = outputWindow.document;
          var v470 = aboveNum$$1 + "\n";
          introspect(JAMScript.process) {
            var v646 = [v469, v470];
            var v647 = v469.write
          }
          var v648 = JAMScript.bind(v647, v646);
          v648();
          var v471 = outputWindow.document;
          var v472 = lineOfText$$2 + "\n";
          introspect(JAMScript.process) {
            var v649 = [v471, v472];
            var v650 = v471.write
          }
          var v651 = JAMScript.bind(v650, v649);
          v651()
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v28 = i$$7 < stopBase$$3
  }
  return true
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v473 = sequence$$13.length;
  var v47 = v473 <= firstIndexToMutate;
  var v474 = !v47;
  if(v474) {
    var v764 = lastIndexToMutate < 0;
    var v782 = !v764;
    if(v782) {
      v764 = lastIndexToMutate <= firstIndexToMutate
    }
    v47 = v764
  }
  if(v47) {
    numMut = 0
  }
  var i$$8 = 0;
  var v29 = i$$8 < numMut;
  for(;v29;) {
    var v475 = sequence$$13.length;
    maxNum = v475;
    introspect(JAMScript.process) {
      var v652 = [Math];
      var v653 = Math.random
    }
    var v654 = JAMScript.bind(v653, v652);
    var v476 = v654();
    var v477 = v476 * maxNum;
    introspect(JAMScript.process) {
      var v655 = [Math, v477];
      var v656 = Math.floor
    }
    var v657 = JAMScript.bind(v656, v655);
    randNum = v657();
    var v48 = randNum < firstIndexToMutate;
    var v478 = !v48;
    if(v478) {
      v48 = randNum > lastIndexToMutate
    }
    if(v48) {
      numMut++;
      i$$8++;
      v29 = i$$8 < numMut;
      continue
    }
    introspect(JAMScript.process) {
      var v658 = [sequence$$13, randNum];
      var v659 = sequence$$13.charAt
    }
    var v660 = JAMScript.bind(v659, v658);
    currentChar = v660();
    needNewChar = true;
    for(;needNewChar;) {
      introspect(JAMScript.process) {
        var v661 = [Math];
        var v662 = Math.random
      }
      var v663 = JAMScript.bind(v662, v661);
      var v479 = v663();
      var v480 = components$$1.length;
      var v481 = v479 * v480;
      introspect(JAMScript.process) {
        var v664 = [Math, v481];
        var v665 = Math.round
      }
      var v666 = JAMScript.bind(v665, v664);
      componentsIndex = v666();
      var v482 = components$$1.length;
      var v483 = componentsIndex == v482;
      if(v483) {
        componentsIndex = 0
      }
      var v484 = components$$1[componentsIndex];
      var v485 = v484 != currentChar;
      if(v485) {
        needNewChar = false
      }
    }
    introspect(JAMScript.process) {
      var v667 = [sequence$$13, 0, randNum];
      var v668 = sequence$$13.substring
    }
    var v669 = JAMScript.bind(v668, v667);
    var v486 = v669();
    var v487 = components$$1[componentsIndex];
    var v488 = v486 + v487;
    var v489 = randNum + 1;
    var v490 = sequence$$13.length;
    introspect(JAMScript.process) {
      var v670 = [sequence$$13, v489, v490];
      var v671 = sequence$$13.substring
    }
    var v672 = JAMScript.bind(v671, v670);
    var v491 = v672();
    sequence$$13 = v488 + v491;
    i$$8++;
    v29 = i$$8 < numMut
  }
  var v492 = outputWindow.document;
  var v493 = addReturns(sequence$$13);
  introspect(JAMScript.process) {
    var v673 = [v492, v493];
    var v674 = v492.write
  }
  var v675 = JAMScript.bind(v674, v673);
  v675();
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v30 = j$$9 < lengthOut$$1;
  for(;v30;) {
    introspect(JAMScript.process) {
      var v676 = [Math];
      var v677 = Math.random
    }
    var v678 = JAMScript.bind(v677, v676);
    var v494 = v678();
    var v495 = components$$2.length;
    var v496 = v494 * v495;
    introspect(JAMScript.process) {
      var v679 = [Math, v496];
      var v680 = Math.floor
    }
    var v681 = JAMScript.bind(v680, v679);
    tempNum$$1 = v681();
    var v497 = components$$2[tempNum$$1];
    tempChar$$1 = v497;
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v498 = sequence$$14.length;
    var v499 = v498 == 60;
    if(v499) {
      var v500 = outputWindow.document;
      var v501 = sequence$$14 + "\n";
      introspect(JAMScript.process) {
        var v682 = [v500, v501];
        var v683 = v500.write
      }
      var v684 = JAMScript.bind(v683, v682);
      v684();
      sequence$$14 = ""
    }
    j$$9++;
    v30 = j$$9 < lengthOut$$1
  }
  var v502 = outputWindow.document;
  var v503 = sequence$$14 + "\n";
  introspect(JAMScript.process) {
    var v685 = [v502, v503];
    var v686 = v502.write
  }
  var v687 = JAMScript.bind(v686, v685);
  v687();
  return true
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = new Array;
  var lookAhead = 50;
  var lowerLimit = 0;
  var upperLimit = sequence$$15.length;
  var shiftValue = 0;
  var cutDistance;
  var matchExp;
  var matchPosition;
  var tempString$$1;
  var backGroundClass;
  var matchArray$$1;
  var timesFound = 0;
  var v504 = dnaConformation == "circular";
  if(v504) {
    introspect(JAMScript.process) {
      var v688 = [sequence$$15, 0, lookAhead];
      var v689 = sequence$$15.substring
    }
    var v690 = JAMScript.bind(v689, v688);
    var v505 = v690();
    var v506 = v505.length;
    shiftValue = v506;
    var v507 = sequence$$15.length;
    var v508 = v507 - lookAhead;
    var v509 = sequence$$15.length;
    introspect(JAMScript.process) {
      var v691 = [sequence$$15, v508, v509];
      var v692 = sequence$$15.substring
    }
    var v693 = JAMScript.bind(v692, v691);
    var v510 = v693();
    var v511 = v510 + sequence$$15;
    introspect(JAMScript.process) {
      var v694 = [sequence$$15, 0, lookAhead];
      var v695 = sequence$$15.substring
    }
    var v696 = JAMScript.bind(v695, v694);
    var v512 = v696();
    sequence$$15 = v511 + v512;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v513 = outputWindow.document;
  introspect(JAMScript.process) {
    var v697 = [v513, '<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'];
    var v698 = v513.write
  }
  var v699 = JAMScript.bind(v698, v697);
  v699();
  var v514 = outputWindow.document;
  var v515 = '<tr><td class="title" width="200px">' + "Site:";
  var v516 = v515 + '</td><td class="title">';
  var v517 = v516 + "Positions:";
  var v518 = v517 + "</td></tr>\n";
  introspect(JAMScript.process) {
    var v700 = [v514, v518];
    var v701 = v514.write
  }
  var v702 = JAMScript.bind(v701, v700);
  v702();
  var i$$9 = 0;
  var v519 = arrayOfItems.length;
  var v32 = i$$9 < v519;
  for(;v32;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v520 = arrayOfItems[i$$9];
    introspect(JAMScript.process) {
      var v703 = [v520, /\/.+\//];
      var v704 = v520.match
    }
    var v705 = JAMScript.bind(v704, v703);
    var v521 = v705();
    matchExp = v521 + "gi";
    matchPosition = 0;
    var v706 = JAMScript.bind(eval, [null, matchExp]);
    matchExp = v706();
    var v522 = arrayOfItems[i$$9];
    introspect(JAMScript.process) {
      var v707 = [v522, /\)\D*\d+/];
      var v708 = v522.match
    }
    var v709 = JAMScript.bind(v708, v707);
    var v523 = v709();
    introspect(JAMScript.process) {
      var v710 = [v523];
      var v711 = v523.toString
    }
    var v712 = JAMScript.bind(v711, v710);
    var v524 = v712();
    introspect(JAMScript.process) {
      var v713 = [v524, /\)\D*/, ""];
      var v714 = v524.replace
    }
    var v715 = JAMScript.bind(v714, v713);
    var v525 = v715();
    cutDistance = parseFloat(v525);
    introspect(JAMScript.process) {
      var v716 = [matchExp, sequence$$15];
      var v717 = matchExp.exec
    }
    var v718 = JAMScript.bind(v717, v716);
    var v31 = matchArray$$1 = v718();
    for(;v31;) {
      var v526 = matchExp.lastIndex;
      matchPosition = v526 - cutDistance;
      var v51 = matchPosition >= lowerLimit;
      if(v51) {
        v51 = matchPosition < upperLimit
      }
      if(v51) {
        timesFound++;
        var v527 = tempString$$1 + ", ";
        var v528 = matchPosition - shiftValue;
        var v529 = v528 + 1;
        tempString$$1 = v527 + v529
      }
      var v530 = matchExp.lastIndex;
      var v531 = RegExp.lastMatch;
      var v532 = v531.length;
      var v533 = v530 - v532;
      var v534 = v533 + 1;
      matchExp.lastIndex = v534;
      introspect(JAMScript.process) {
        var v719 = [matchExp, sequence$$15];
        var v720 = matchExp.exec
      }
      var v721 = JAMScript.bind(v720, v719);
      matchArray$$1 = v721();
      v31 = matchArray$$1
    }
    introspect(JAMScript.process) {
      var v722 = [tempString$$1, /\d/];
      var v723 = tempString$$1.search
    }
    var v724 = JAMScript.bind(v723, v722);
    var v535 = v724();
    var v536 = v535 != -1;
    if(v536) {
      introspect(JAMScript.process) {
        var v725 = [tempString$$1, /none,\s*/, ""];
        var v726 = tempString$$1.replace
      }
      var v727 = JAMScript.bind(v726, v725);
      tempString$$1 = v727()
    }
    var v537 = timesFound == 0;
    if(v537) {
      backGroundClass = "none"
    }else {
      var v538 = timesFound == 1;
      if(v538) {
        backGroundClass = "one"
      }else {
        var v539 = timesFound == 2;
        if(v539) {
          backGroundClass = "two"
        }else {
          var v540 = timesFound == 3;
          if(v540) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v541 = outputWindow.document;
    var v542 = '<tr><td class="' + backGroundClass;
    var v543 = v542 + '">';
    var v544 = arrayOfItems[i$$9];
    introspect(JAMScript.process) {
      var v728 = [v544, /\([^\(]+\)/];
      var v729 = v544.match
    }
    var v730 = JAMScript.bind(v729, v728);
    var v545 = v730();
    introspect(JAMScript.process) {
      var v731 = [v545];
      var v732 = v545.toString
    }
    var v733 = JAMScript.bind(v732, v731);
    var v546 = v733();
    introspect(JAMScript.process) {
      var v734 = [v546, /\(|\)/g, ""];
      var v735 = v546.replace
    }
    var v736 = JAMScript.bind(v735, v734);
    var v547 = v736();
    var v548 = v543 + v547;
    var v549 = v548 + '</td><td class="';
    var v550 = v549 + backGroundClass;
    var v551 = v550 + '">';
    var v552 = v551 + tempString$$1;
    var v553 = v552 + "</td></tr>\n";
    introspect(JAMScript.process) {
      var v737 = [v541, v553];
      var v738 = v541.write
    }
    var v739 = JAMScript.bind(v738, v737);
    v739();
    timesFound = 0;
    i$$9++;
    var v554 = arrayOfItems.length;
    v32 = i$$9 < v554
  }
  var v555 = outputWindow.document;
  introspect(JAMScript.process) {
    var v740 = [v555, "</tbody></table>\n"];
    var v741 = v555.write
  }
  var v742 = JAMScript.bind(v741, v740);
  v742();
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v556 = outputWindow.document;
  introspect(JAMScript.process) {
    var v743 = [v556, '<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'];
    var v744 = v556.write
  }
  var v745 = JAMScript.bind(v744, v743);
  v745();
  var v557 = outputWindow.document;
  var v558 = '<tr><td class="title">' + "Pattern:";
  var v559 = v558 + '</td><td class="title">';
  var v560 = v559 + "Times found:";
  var v561 = v560 + '</td><td class="title">';
  var v562 = v561 + "Percentage:";
  var v563 = v562 + "</td></tr>\n";
  introspect(JAMScript.process) {
    var v746 = [v557, v563];
    var v748 = v557.write
  }
  var v749 = JAMScript.bind(v748, v746);
  v749();
  var i$$10 = 0;
  var v564 = arrayOfItems$$1.length;
  var v33 = i$$10 < v564;
  for(;v33;) {
    var tempNumber = 0;
    var v565 = arrayOfItems$$1[i$$10];
    introspect(JAMScript.process) {
      var v750 = [v565, /\/[^\/]+\//];
      var v751 = v565.match
    }
    var v752 = JAMScript.bind(v751, v750);
    var v566 = v752();
    var matchExp$$1 = v566 + "gi";
    var v753 = JAMScript.bind(eval, [null, matchExp$$1]);
    matchExp$$1 = v753();
    introspect(JAMScript.process) {
      var v754 = [sequence$$16, matchExp$$1];
      var v755 = sequence$$16.search
    }
    var v757 = JAMScript.bind(v755, v754);
    var v567 = v757();
    var v568 = v567 != -1;
    if(v568) {
      introspect(JAMScript.process) {
        var v758 = [sequence$$16, matchExp$$1];
        var v759 = sequence$$16.match
      }
      var v760 = JAMScript.bind(v759, v758);
      var v569 = v760();
      var v570 = v569.length;
      tempNumber = v570
    }
    var percentage = 0;
    var v571 = originalLength + 1;
    var v572 = arrayOfItems$$1[i$$10];
    introspect(JAMScript.process) {
      var v761 = [v572, /\d+/];
      var v762 = v572.match
    }
    var v763 = JAMScript.bind(v762, v761);
    var v573 = v763();
    var v574 = parseFloat(v573);
    var v575 = v571 - v574;
    var v576 = v575 > 0;
    if(v576) {
      var v577 = 100 * tempNumber;
      var v578 = originalLength + 1;
      var v579 = arrayOfItems$$1[i$$10];
      introspect(JAMScript.process) {
        var v764 = [v579, /\d+/];
        var v765 = v579.match
      }
      var v766 = JAMScript.bind(v765, v764);
      var v580 = v766();
      var v581 = parseFloat(v580);
      var v582 = v578 - v581;
      percentage = v577 / v582
    }
    var v583 = outputWindow.document;
    var v584 = arrayOfItems$$1[i$$10];
    introspect(JAMScript.process) {
      var v767 = [v584, /\([^\(]+\)\b/];
      var v768 = v584.match
    }
    var v769 = JAMScript.bind(v768, v767);
    var v585 = v769();
    introspect(JAMScript.process) {
      var v770 = [v585];
      var v771 = v585.toString
    }
    var v772 = JAMScript.bind(v771, v770);
    var v586 = v772();
    introspect(JAMScript.process) {
      var v773 = [v586, /\(|\)/g, ""];
      var v774 = v586.replace
    }
    var v775 = JAMScript.bind(v774, v773);
    var v587 = v775();
    var v588 = "<tr><td>" + v587;
    var v589 = v588 + "</td><td>";
    var v590 = v589 + tempNumber;
    var v591 = v590 + "</td><td>";
    introspect(JAMScript.process) {
      var v776 = [percentage, 2];
      var v777 = percentage.toFixed
    }
    var v778 = JAMScript.bind(v777, v776);
    var v592 = v778();
    var v593 = v591 + v592;
    var v594 = v593 + "</td></tr>\n";
    introspect(JAMScript.process) {
      var v779 = [v583, v594];
      var v780 = v583.write
    }
    var v781 = JAMScript.bind(v780, v779);
    v781();
    i$$10++;
    var v595 = arrayOfItems$$1.length;
    v33 = i$$10 < v595
  }
  var v596 = outputWindow.document;
  introspect(JAMScript.process) {
    var v782 = [v596, "</tbody></table>\n"];
    var v783 = v596.write
  }
  var v784 = JAMScript.bind(v783, v782);
  v784();
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v597 = sequence$$17.length;
  var v34 = v597 > 0;
  for(;v34;) {
    var v598 = sequence$$17.length;
    maxNum$$1 = v598;
    introspect(JAMScript.process) {
      var v785 = [Math];
      var v786 = Math.random
    }
    var v787 = JAMScript.bind(v786, v785);
    var v599 = v787();
    var v600 = v599 * maxNum$$1;
    introspect(JAMScript.process) {
      var v788 = [Math, v600];
      var v789 = Math.floor
    }
    var v790 = JAMScript.bind(v789, v788);
    randNum$$1 = v790();
    introspect(JAMScript.process) {
      var v791 = [sequence$$17, randNum$$1];
      var v792 = sequence$$17.charAt
    }
    var v793 = JAMScript.bind(v792, v791);
    tempChar$$2 = v793();
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAMScript.process) {
      var v794 = [sequence$$17, 0, randNum$$1];
      var v795 = sequence$$17.substring
    }
    var v796 = JAMScript.bind(v795, v794);
    tempString1 = v796();
    var v601 = randNum$$1 + 1;
    var v602 = sequence$$17.length;
    introspect(JAMScript.process) {
      var v797 = [sequence$$17, v601, v602];
      var v798 = sequence$$17.substring
    }
    var v799 = JAMScript.bind(v798, v797);
    tempString2 = v799();
    sequence$$17 = tempString1 + tempString2;
    var v603 = tempSeq.length;
    var v604 = v603 == 60;
    if(v604) {
      var v605 = outputWindow.document;
      var v606 = tempSeq + "\n";
      introspect(JAMScript.process) {
        var v800 = [v605, v606];
        var v801 = v605.write
      }
      var v802 = JAMScript.bind(v801, v800);
      v802();
      tempSeq = ""
    }
    var v607 = sequence$$17.length;
    v34 = v607 > 0
  }
  var v608 = outputWindow.document;
  var v609 = tempSeq + "\n";
  introspect(JAMScript.process) {
    var v803 = [v608, v609];
    var v804 = v608.write
  }
  var v805 = JAMScript.bind(v804, v803);
  v805();
  return true
}
function identSim() {
  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v610 = testScript();
  var v611 = v610 == false;
  if(v611) {
    return false
  }
  var txt = ">CremaneiFEM-2\n-------------------MSDSLNHPSSSTVHADDGFEPPTSPEDNNKK\nPSLEQIKQEREALFTDLFADRRRSARSVIEEAFQNELMSAEPVQPNVPN-\n-PHSIPIRFRHQPVAGPAHDVFGDAVHSIFQKIMSRGVNADYSHWMSYWI\nALGIDKKT-QMNYHMKPFCKDTYATEGSLEAKQTFTDKIRSAVEEIIWKS\nAEYCDILSEKWTGIHVSADQLKGQRNKQEDRFVAYPNGQYMNRGQ-SDIS\nLLAVFDGHGGHECSQYAAAHFWEAWSDAQHHHSQDMKLDELLEKALETLD\nERMTVRSVRESWKGGTTAVCCAVDLNTNQIAFAWLGDSPGYIMSNLEFRK\nFTTEHSPSDPEECRRVEEVGGQIFVIGGELRVNGVLNLTRALGDVPGRPM\nISNKPDTLLKTIEPADYLVLLACDGISDVFNTSDLYNLVQAFVNEYDVED\nYHELARYICNQAVSAGSADNVTVVIGFLRPPEDVWRVMKTDSDDEESELE\nEEDDNE\n>CelegansFEM-2\n--------------------------------------------------\n--MEKVNEERDAVFEDHIGDRRRSVRSLLEEAFADEMEKTSYDVEVADTP\n-QPHIPIRFRHPPIAGPVHDVFGDAIHDIFQKMMKRGQAVDFCHWVSHLI\nATEIDEKFSEVAFRDVQYNPDIYVTDSTTEAKKLFNDKIWPAIDKILQQN\nAETCPILSEKWSGIHVSGDQLKGQRHKQEDRFLAYPNGQYMDRGE-DPIS\nVLAVFDGHGGHECSQYAAGHLWETWLEVRKSRDPSDSLEDQLRKSLELLD\nERMTVRSVKECWKGGSTAVCCAIDMDQKLMALAWLGDSPGYVMSNIEFRQ\nLTRGHSPSDEREARRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNEPETCQVPIESSDYLVLLACDGISDVFNERDLYQLVEAFANDYPVED\nYAELSRFICTKAIEAGSADNVSVVIGFLRPPQDVWKLMKHESDDEDSDVT\nDEE---\n>CbriggsaeFEM-2\nMSGPPPPKTNEKSSQPVTGRSQEPTRKGQLGPNYLRIIEEDEEYGHALLE\nPSEEQIKFEREALFEDLHLDRQRSARSFIEETFEEEMLGPQNGIPPTTES\nPQSYIPIRYRNPPAAAPVHDVFGDAVHAIFQKLMTRGPPVEYCHWMSYWI\nAKQIDKDS-PVKYHECRFTPDQYVTENTAEAKKTYMDNMWKAAEKNLWMY\nTYNSPLLRTKWTGIHVSAEQIKGQRHKQEDRFVAYPNSLYMDTSRSDHIA\nLLGVFDGHGGHECSQYAAGHMWETWIETRASHFEEP-LEKQLKTSLDLLD\nERMTVRSTKECWKGGTTAVCCAIDMNKKELAFAWLGDSPGYIMDNLEVRK\nVTRDHSPSDPEEGRRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNQAETCQRDIEVGDYLVILACDGISDVFNTSDLYNLVQAYVNENPVEE\nYNDLAHYICHEAIAHGSTDNVTVVIGFLRPPQDLWRMMKIDEESDEEEDE\nVDDE--\n>CremaneiFEM-2\n-------------------MSDSLNHPSSSTVHADDGFEPPTSPEDNNKK\nPSLEQIKQEREALFTDLFADRRRSARSVIEEAFQNELMSAEPVQPNVPN-\n-PHSIPIRFRHQPVAGPAHDVFGDAVHSIFQKIMSRGVNADYSHWMSYWI\nALGIDKKT-QMNYHMKPFCKDTYATEGSLEAKQTFTDKIRSAVEEIIWKS\nAEYCDILSEKWTGIHVSADQLKGQRNKQEDRFVAYPNGQYMNRGQ-SDIS\nLLAVFDGHGGHECSQYAAAHFWEAWSDAQHHHSQDMKLDELLEKALETLD\nERMTVRSVRESWKGGTTAVCCAVDLNTNQIAFAWLGDSPGYIMSNLEFRK\nFTTEHSPSDPEECRRVEEVGGQIFVIGGELRVNGVLNLTRALGDVPGRPM\nISNKPDTLLKTIEPADYLVLLACDGISDVFNTSDLYNLVQAFVNEYDVED\nYHELARYICNQAVSAGSADNVTVVIGFLRPPEDVWRVMKTDSDDEESELE\nEEDDNE\n>CelegansFEM-2\n--------------------------------------------------\n--MEKVNEERDAVFEDHIGDRRRSVRSLLEEAFADEMEKTSYDVEVADTP\n-QPHIPIRFRHPPIAGPVHDVFGDAIHDIFQKMMKRGQAVDFCHWVSHLI\nATEIDEKFSEVAFRDVQYNPDIYVTDSTTEAKKLFNDKIWPAIDKILQQN\nAETCPILSEKWSGIHVSGDQLKGQRHKQEDRFLAYPNGQYMDRGE-DPIS\nVLAVFDGHGGHECSQYAAGHLWETWLEVRKSRDPSDSLEDQLRKSLELLD\nERMTVRSVKECWKGGSTAVCCAIDMDQKLMALAWLGDSPGYVMSNIEFRQ\nLTRGHSPSDEREARRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNEPETCQVPIESSDYLVLLACDGISDVFNERDLYQLVEAFANDYPVED\nYAELSRFICTKAIEAGSADNVSVVIGFLRPPQDVWKLMKHESDDEDSDVT\nDEE---\n>CbriggsaeFEM-2\nMSGPPPPKTNEKSSQPVTGRSQEPTRKGQLGPNYLRIIEEDEEYGHALLE\nPSEEQIKFEREALFEDLHLDRQRSARSFIEETFEEEMLGPQNGIPPTTES\nPQSYIPIRYRNPPAAAPVHDVFGDAVHAIFQKLMTRGPPVEYCHWMSYWI\nAKQIDKDS-PVKYHECRFTPDQYVTENTAEAKKTYMDNMWKAAEKNLWMY\nTYNSPLLRTKWTGIHVSAEQIKGQRHKQEDRFVAYPNSLYMDTSRSDHIA\nLLGVFDGHGGHECSQYAAGHMWETWIETRASHFEEP-LEKQLKTSLDLLD\nERMTVRSTKECWKGGTTAVCCAIDMNKKELAFAWLGDSPGYIMDNLEVRK\nVTRDHSPSDPEEGRRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNQAETCQRDIEVGDYLVILACDGISDVFNTSDLYNLVQAYVNENPVEE\nYNDLAHYICHEAIAHGSTDNVTVVIGFLRPPQDLWRMMKIDEESDEEEDE\nVDDE--\n>CremaneiFEM-2\n-------------------MSDSLNHPSSSTVHADDGFEPPTSPEDNNKK\nPSLEQIKQEREALFTDLFADRRRSARSVIEEAFQNELMSAEPVQPNVPN-\n-PHSIPIRFRHQPVAGPAHDVFGDAVHSIFQKIMSRGVNADYSHWMSYWI\nALGIDKKT-QMNYHMKPFCKDTYATEGSLEAKQTFTDKIRSAVEEIIWKS\nAEYCDILSEKWTGIHVSADQLKGQRNKQEDRFVAYPNGQYMNRGQ-SDIS\nLLAVFDGHGGHECSQYAAAHFWEAWSDAQHHHSQDMKLDELLEKALETLD\nERMTVRSVRESWKGGTTAVCCAVDLNTNQIAFAWLGDSPGYIMSNLEFRK\nFTTEHSPSDPEECRRVEEVGGQIFVIGGELRVNGVLNLTRALGDVPGRPM\nISNKPDTLLKTIEPADYLVLLACDGISDVFNTSDLYNLVQAFVNEYDVED\nYHELARYICNQAVSAGSADNVTVVIGFLRPPEDVWRVMKTDSDDEESELE\nEEDDNE\n>CelegansFEM-2\n--------------------------------------------------\n--MEKVNEERDAVFEDHIGDRRRSVRSLLEEAFADEMEKTSYDVEVADTP\n-QPHIPIRFRHPPIAGPVHDVFGDAIHDIFQKMMKRGQAVDFCHWVSHLI\nATEIDEKFSEVAFRDVQYNPDIYVTDSTTEAKKLFNDKIWPAIDKILQQN\nAETCPILSEKWSGIHVSGDQLKGQRHKQEDRFLAYPNGQYMDRGE-DPIS\nVLAVFDGHGGHECSQYAAGHLWETWLEVRKSRDPSDSLEDQLRKSLELLD\nERMTVRSVKECWKGGSTAVCCAIDMDQKLMALAWLGDSPGYVMSNIEFRQ\nLTRGHSPSDEREARRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNEPETCQVPIESSDYLVLLACDGISDVFNERDLYQLVEAFANDYPVED\nYAELSRFICTKAIEAGSADNVSVVIGFLRPPQDVWKLMKHESDDEDSDVT\nDEE---\n>CbriggsaeFEM-2\nMSGPPPPKTNEKSSQPVTGRSQEPTRKGQLGPNYLRIIEEDEEYGHALLE\nPSEEQIKFEREALFEDLHLDRQRSARSFIEETFEEEMLGPQNGIPPTTES\nPQSYIPIRYRNPPAAAPVHDVFGDAVHAIFQKLMTRGPPVEYCHWMSYWI\nAKQIDKDS-PVKYHECRFTPDQYVTENTAEAKKTYMDNMWKAAEKNLWMY\nTYNSPLLRTKWTGIHVSAEQIKGQRHKQEDRFVAYPNSLYMDTSRSDHIA\nLLGVFDGHGGHECSQYAAGHMWETWIETRASHFEEP-LEKQLKTSLDLLD\nERMTVRSTKECWKGGTTAVCCAIDMNKKELAFAWLGDSPGYIMDNLEVRK\nVTRDHSPSDPEEGRRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNQAETCQRDIEVGDYLVILACDGISDVFNTSDLYNLVQAYVNENPVEE\nYNDLAHYICHEAIAHGSTDNVTVVIGFLRPPQDLWRMMKIDEESDEEEDE\nVDDE--\n>CremaneiFEM-2\n-------------------MSDSLNHPSSSTVHADDGFEPPTSPEDNNKK\nPSLEQIKQEREALFTDLFADRRRSARSVIEEAFQNELMSAEPVQPNVPN-\n-PHSIPIRFRHQPVAGPAHDVFGDAVHSIFQKIMSRGVNADYSHWMSYWI\nALGIDKKT-QMNYHMKPFCKDTYATEGSLEAKQTFTDKIRSAVEEIIWKS\nAEYCDILSEKWTGIHVSADQLKGQRNKQEDRFVAYPNGQYMNRGQ-SDIS\nLLAVFDGHGGHECSQYAAAHFWEAWSDAQHHHSQDMKLDELLEKALETLD\nERMTVRSVRESWKGGTTAVCCAVDLNTNQIAFAWLGDSPGYIMSNLEFRK\nFTTEHSPSDPEECRRVEEVGGQIFVIGGELRVNGVLNLTRALGDVPGRPM\nISNKPDTLLKTIEPADYLVLLACDGISDVFNTSDLYNLVQAFVNEYDVED\nYHELARYICNQAVSAGSADNVTVVIGFLRPPEDVWRVMKTDSDDEESELE\nEEDDNE\n>CelegansFEM-2\n--------------------------------------------------\n--MEKVNEERDAVFEDHIGDRRRSVRSLLEEAFADEMEKTSYDVEVADTP\n-QPHIPIRFRHPPIAGPVHDVFGDAIHDIFQKMMKRGQAVDFCHWVSHLI\nATEIDEKFSEVAFRDVQYNPDIYVTDSTTEAKKLFNDKIWPAIDKILQQN\nAETCPILSEKWSGIHVSGDQLKGQRHKQEDRFLAYPNGQYMDRGE-DPIS\nVLAVFDGHGGHECSQYAAGHLWETWLEVRKSRDPSDSLEDQLRKSLELLD\nERMTVRSVKECWKGGSTAVCCAIDMDQKLMALAWLGDSPGYVMSNIEFRQ\nLTRGHSPSDEREARRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNEPETCQVPIESSDYLVLLACDGISDVFNERDLYQLVEAFANDYPVED\nYAELSRFICTKAIEAGSADNVSVVIGFLRPPQDVWKLMKHESDDEDSDVT\nDEE---\n>CbriggsaeFEM-2\nMSGPPPPKTNEKSSQPVTGRSQEPTRKGQLGPNYLRIIEEDEEYGHALLE\nPSEEQIKFEREALFEDLHLDRQRSARSFIEETFEEEMLGPQNGIPPTTES\nPQSYIPIRYRNPPAAAPVHDVFGDAVHAIFQKLMTRGPPVEYCHWMSYWI\nAKQIDKDS-PVKYHECRFTPDQYVTENTAEAKKTYMDNMWKAAEKNLWMY\nTYNSPLLRTKWTGIHVSAEQIKGQRHKQEDRFVAYPNSLYMDTSRSDHIA\nLLGVFDGHGGHECSQYAAGHMWETWIETRASHFEEP-LEKQLKTSLDLLD\nERMTVRSTKECWKGGTTAVCCAIDMNKKELAFAWLGDSPGYIMDNLEVRK\nVTRDHSPSDPEEGRRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNQAETCQRDIEVGDYLVILACDGISDVFNTSDLYNLVQAYVNENPVEE\nYNDLAHYICHEAIAHGSTDNVTVVIGFLRPPQDLWRMMKIDEESDEEEDE\nVDDE--\n>CremaneiFEM-2\n-------------------MSDSLNHPSSSTVHADDGFEPPTSPEDNNKK\nPSLEQIKQEREALFTDLFADRRRSARSVIEEAFQNELMSAEPVQPNVPN-\n-PHSIPIRFRHQPVAGPAHDVFGDAVHSIFQKIMSRGVNADYSHWMSYWI\nALGIDKKT-QMNYHMKPFCKDTYATEGSLEAKQTFTDKIRSAVEEIIWKS\nAEYCDILSEKWTGIHVSADQLKGQRNKQEDRFVAYPNGQYMNRGQ-SDIS\nLLAVFDGHGGHECSQYAAAHFWEAWSDAQHHHSQDMKLDELLEKALETLD\nERMTVRSVRESWKGGTTAVCCAVDLNTNQIAFAWLGDSPGYIMSNLEFRK\nFTTEHSPSDPEECRRVEEVGGQIFVIGGELRVNGVLNLTRALGDVPGRPM\nISNKPDTLLKTIEPADYLVLLACDGISDVFNTSDLYNLVQAFVNEYDVED\nYHELARYICNQAVSAGSADNVTVVIGFLRPPEDVWRVMKTDSDDEESELE\nEEDDNE\n>CelegansFEM-2\n--------------------------------------------------\n--MEKVNEERDAVFEDHIGDRRRSVRSLLEEAFADEMEKTSYDVEVADTP\n-QPHIPIRFRHPPIAGPVHDVFGDAIHDIFQKMMKRGQAVDFCHWVSHLI\nATEIDEKFSEVAFRDVQYNPDIYVTDSTTEAKKLFNDKIWPAIDKILQQN\nAETCPILSEKWSGIHVSGDQLKGQRHKQEDRFLAYPNGQYMDRGE-DPIS\nVLAVFDGHGGHECSQYAAGHLWETWLEVRKSRDPSDSLEDQLRKSLELLD\nERMTVRSVKECWKGGSTAVCCAIDMDQKLMALAWLGDSPGYVMSNIEFRQ\nLTRGHSPSDEREARRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNEPETCQVPIESSDYLVLLACDGISDVFNERDLYQLVEAFANDYPVED\nYAELSRFICTKAIEAGSADNVSVVIGFLRPPQDVWKLMKHESDDEDSDVT\nDEE---\n>CbriggsaeFEM-2\nMSGPPPPKTNEKSSQPVTGRSQEPTRKGQLGPNYLRIIEEDEEYGHALLE\nPSEEQIKFEREALFEDLHLDRQRSARSFIEETFEEEMLGPQNGIPPTTES\nPQSYIPIRYRNPPAAAPVHDVFGDAVHAIFQKLMTRGPPVEYCHWMSYWI\nAKQIDKDS-PVKYHECRFTPDQYVTENTAEAKKTYMDNMWKAAEKNLWMY\nTYNSPLLRTKWTGIHVSAEQIKGQRHKQEDRFVAYPNSLYMDTSRSDHIA\nLLGVFDGHGGHECSQYAAGHMWETWIETRASHFEEP-LEKQLKTSLDLLD\nERMTVRSTKECWKGGTTAVCCAIDMNKKELAFAWLGDSPGYIMDNLEVRK\nVTRDHSPSDPEEGRRVEEAGGQLFVIGGELRVNGVLNLTRALGDVPGRPM\nISNQAETCQRDIEVGDYLVILACDGISDVFNTSDLYNLVQAYVNENPVEE\nYNDLAHYICHEAIAHGSTDNVTVVIGFLRPPQDLWRMMKIDEESDEEEDE\nVDDE--\n";
  theAlignment = "X" + txt;
  introspect(JAMScript.process) {
    var v806 = [theAlignment, /[>%#]/];
    var v807 = theAlignment.split
  }
  var v808 = JAMScript.bind(v807, v806);
  alignArray$$1 = v808();
  var v629 = earlyCheckAlign(alignArray$$1);
  var v630 = v629 == false;
  if(v630) {
    return false
  }
  var i$$11 = 1;
  var v631 = alignArray$$1.length;
  var v35 = i$$11 < v631;
  for(;v35;) {
    var v632 = i$$11 - 1;
    var v633 = alignArray$$1[i$$11];
    introspect(JAMScript.process) {
      var v809 = [v633, /[^\f\n\r]+[\f\n\r]/];
      var v810 = v633.match
    }
    var v811 = JAMScript.bind(v810, v809);
    var v634 = v811();
    titleArray[v632] = v634;
    var v635 = i$$11 - 1;
    var v636 = i$$11 - 1;
    var v637 = titleArray[v636];
    introspect(JAMScript.process) {
      var v812 = [v637];
      var v813 = v637.toString
    }
    var v814 = JAMScript.bind(v813, v812);
    var v638 = v814();
    var v639 = filterFastaTitle(v638);
    introspect(JAMScript.process) {
      var v815 = [v639, /[\f\n\r]/g, ""];
      var v816 = v639.replace
    }
    var v817 = JAMScript.bind(v816, v815);
    var v640 = v817();
    titleArray[v635] = v640;
    var v641 = i$$11 - 1;
    var v642 = i$$11 - 1;
    var v643 = titleArray[v642];
    introspect(JAMScript.process) {
      var v818 = [v643, 0, 20];
      var v819 = v643.substring
    }
    var v820 = JAMScript.bind(v819, v818);
    var v644 = v820();
    titleArray[v641] = v644;
    var v645 = i$$11 == 1;
    if(v645) {
      var v646 = i$$11 - 1;
      var v647 = titleArray[v646];
      var v648 = v647.length;
      longestTitle = v648
    }else {
      var v649 = i$$11 - 1;
      var v650 = titleArray[v649];
      var v651 = v650.length;
      var v652 = v651 > longestTitle;
      if(v652) {
        var v653 = i$$11 - 1;
        var v654 = titleArray[v653];
        var v655 = v654.length;
        longestTitle = v655
      }
    }
    var v656 = i$$11 - 1;
    var v657 = alignArray$$1[i$$11];
    introspect(JAMScript.process) {
      var v821 = [v657, /[^\f\n\r]+[\f\n\r]/, ""];
      var v822 = v657.replace
    }
    var v823 = JAMScript.bind(v822, v821);
    var v658 = v823();
    sequenceArray$$1[v656] = v658;
    var v659 = i$$11 - 1;
    var v660 = i$$11 - 1;
    var v661 = sequenceArray$$1[v660];
    var v662 = filterAlignSeq(v661);
    sequenceArray$$1[v659] = v662;
    i$$11++;
    var v663 = alignArray$$1.length;
    v35 = i$$11 < v663
  }
  var v664 = checkAlign(titleArray, sequenceArray$$1);
  var v665 = v664 == false;
  if(v665) {
    return false
  }
  var v670 = "GAVLI, FYW, CM, ST, KRH, DENQ, P"
  introspect(JAMScript.process) {
    var v824 = [v670, /\s/g, ""];
    var v825 = v670.replace
  }
  var v826 = JAMScript.bind(v825, v824);
  var v671 = v826();
  introspect(JAMScript.process) {
    var v827 = [v671];
    var v828 = v671.toUpperCase
  }
  var v829 = JAMScript.bind(v828, v827);
  groupString = v829();
  introspect(JAMScript.process) {
    var v830 = [groupString, /,/];
    var v831 = groupString.split
  }
  var v832 = JAMScript.bind(v831, v830);
  arrayOfGroups = v832();
  var v672 = checkGroupInput(arrayOfGroups);
  var v673 = v672 == false;
  if(v673) {
    return false
  }
  openWindowAlign("Ident and Sim");
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();

  return true
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v674 = sequenceArray$$2.length;
  var v39 = k$$3 < v674;
  for(;v39;) {
    var m = k$$3 + 1;
    var v675 = sequenceArray$$2.length;
    var v38 = m < v675;
    for(;v38;) {
      var i$$12 = 0;
      var v676 = sequenceArray$$2[0];
      var v677 = v676.length;
      var v37 = i$$12 < v677;
      for(;v37;) {
        alignLength = alignLength + 1;
        var v678 = sequenceArray$$2[k$$3];
        introspect(JAMScript.process) {
          var v833 = [v678, i$$12];
          var v834 = v678.charAt
        }
        var v835 = JAMScript.bind(v834, v833);
        var v679 = v835();
        introspect(JAMScript.process) {
          var v836 = [v679];
          var v837 = v679.toUpperCase
        }
        var v838 = JAMScript.bind(v837, v836);
        var v680 = v838();
        var v681 = sequenceArray$$2[m];
        introspect(JAMScript.process) {
          var v839 = [v681, i$$12];
          var v840 = v681.charAt
        }
        var v841 = JAMScript.bind(v840, v839);
        var v682 = v841();
        introspect(JAMScript.process) {
          var v842 = [v682];
          var v843 = v682.toUpperCase
        }
        var v844 = JAMScript.bind(v843, v842);
        var v683 = v844();
        var v52 = v680 == v683;
        if(v52) {
          var v684 = sequenceArray$$2[k$$3];
          introspect(JAMScript.process) {
            var v845 = [v684, i$$12];
            var v846 = v684.charAt
          }
          var v847 = JAMScript.bind(v846, v845);
          var v685 = v847();
          introspect(JAMScript.process) {
            var v848 = [v685];
            var v849 = v685.toUpperCase
          }
          var v850 = JAMScript.bind(v849, v848);
          var v686 = v850();
          v52 = v686 != "X"
        }
        if(v52) {
          var v687 = sequenceArray$$2[k$$3];
          introspect(JAMScript.process) {
            var v851 = [v687, i$$12];
            var v852 = v687.charAt
          }
          var v853 = JAMScript.bind(v852, v851);
          var v688 = v853();
          var v53 = v688 != "-";
          if(v53) {
            var v689 = sequenceArray$$2[k$$3];
            introspect(JAMScript.process) {
              var v854 = [v689, i$$12];
              var v855 = v689.charAt
            }
            var v856 = JAMScript.bind(v855, v854);
            var v690 = v856();
            v53 = v690 != "."
          }
          if(v53) {
            identical = identical + 1
          }else {
            alignLength = alignLength - 1
          }
        }else {
          var j$$10 = 0;
          var v691 = arrayOfGroups$$1.length;
          var v36 = j$$10 < v691;
          for(;v36;) {
            var v692 = arrayOfGroups$$1[j$$10];
            var v693 = sequenceArray$$2[k$$3];
            introspect(JAMScript.process) {
              var v857 = [v693, i$$12];
              var v858 = v693.charAt
            }
            var v859 = JAMScript.bind(v858, v857);
            var v694 = v859();
            introspect(JAMScript.process) {
              var v860 = [v694];
              var v861 = v694.toUpperCase
            }
            var v862 = JAMScript.bind(v861, v860);
            var v695 = v862();
            introspect(JAMScript.process) {
              var v863 = [v692, v695];
              var v864 = v692.search
            }
            var v865 = JAMScript.bind(v864, v863);
            var v696 = v865();
            var v54 = v696 != -1;
            if(v54) {
              var v697 = arrayOfGroups$$1[j$$10];
              var v698 = sequenceArray$$2[m];
              introspect(JAMScript.process) {
                var v866 = [v698, i$$12];
                var v867 = v698.charAt
              }
              var v868 = JAMScript.bind(v867, v866);
              var v699 = v868();
              introspect(JAMScript.process) {
                var v869 = [v699];
                var v870 = v699.toUpperCase
              }
              var v871 = JAMScript.bind(v870, v869);
              var v700 = v871();
              introspect(JAMScript.process) {
                var v872 = [v697, v700];
                var v873 = v697.search
              }
              var v874 = JAMScript.bind(v873, v872);
              var v701 = v874();
              v54 = v701 != -1
            }
            if(v54) {
              similar = similar + 1;
              break
            }
            j$$10++;
            var v702 = arrayOfGroups$$1.length;
            v36 = j$$10 < v702
          }
        }
        i$$12++;
        var v703 = sequenceArray$$2[0];
        var v704 = v703.length;
        v37 = i$$12 < v704
      }
      var v705 = outputWindow.document;
      var v706 = titleArray$$1[k$$3];
      var v707 = "<b>Results for " + v706;
      var v708 = v707 + " vs ";
      var v709 = titleArray$$1[m];
      var v710 = v708 + v709;
      var v711 = v710 + ":</b>\n";
      introspect(JAMScript.process) {
        var v875 = [v705, v711];
        var v876 = v705.write
      }
      var v877 = JAMScript.bind(v876, v875);
      v877();
      var v712 = outputWindow.document;
      var v713 = "  Alignment length: " + alignLength;
      var v714 = v713 + "\n";
      introspect(JAMScript.process) {
        var v878 = [v712, v714];
        var v879 = v712.write
      }
      var v880 = JAMScript.bind(v879, v878);
      v880();
      var v715 = outputWindow.document;
      var v716 = "Identical residues: " + identical;
      var v717 = v716 + "\n";
      introspect(JAMScript.process) {
        var v881 = [v715, v717];
        var v882 = v715.write
      }
      var v883 = JAMScript.bind(v882, v881);
      v883();
      var v718 = outputWindow.document;
      var v719 = "  Similar residues: " + similar;
      var v720 = v719 + "\n";
      introspect(JAMScript.process) {
        var v884 = [v718, v720];
        var v885 = v718.write
      }
      var v886 = JAMScript.bind(v885, v884);
      v886();
      var v721 = identical == 0;
      if(v721) {
        var v722 = outputWindow.document;
        var v723 = "  Percent identity: " + 0;
        var v724 = v723 + "\n";
        introspect(JAMScript.process) {
          var v887 = [v722, v724];
          var v888 = v722.write
        }
        var v889 = JAMScript.bind(v888, v887);
        v889()
      }else {
        var v725 = outputWindow.document;
        var v726 = identical / alignLength;
        var v727 = v726 * 100;
        introspect(JAMScript.process) {
          var v890 = [v727, 2];
          var v891 = v727.toFixed
        }
        var v892 = JAMScript.bind(v891, v890);
        var v728 = v892();
        var v729 = "  Percent identity: " + v728;
        var v730 = v729 + "\n";
        introspect(JAMScript.process) {
          var v893 = [v725, v730];
          var v894 = v725.write
        }
        var v895 = JAMScript.bind(v894, v893);
        v895()
      }
      var v55 = similar == 0;
      if(v55) {
        v55 = identical == 0
      }
      if(v55) {
        var v731 = outputWindow.document;
        var v732 = "Percent similarity: " + 0;
        var v733 = v732 + "\n";
        introspect(JAMScript.process) {
          var v896 = [v731, v733];
          var v897 = v731.write
        }
        var v898 = JAMScript.bind(v897, v896);
        v898()
      }else {
        var v734 = outputWindow.document;
        var v735 = identical + similar;
        var v736 = v735 / alignLength;
        var v737 = v736 * 100;
        introspect(JAMScript.process) {
          var v899 = [v737, 2];
          var v900 = v737.toFixed
        }
        var v901 = JAMScript.bind(v900, v899);
        var v738 = v901();
        var v739 = "Percent similarity: " + v738;
        var v740 = v739 + "\n";
        introspect(JAMScript.process) {
          var v902 = [v734, v740];
          var v903 = v734.write
        }
        var v904 = JAMScript.bind(v903, v902);
        v904()
      }
      var v741 = outputWindow.document;
      introspect(JAMScript.process) {
        var v905 = [v741, "\n"];
        var v906 = v741.write
      }
      var v907 = JAMScript.bind(v906, v905);
      v907();
      identical = 0;
      similar = 0;
      alignLength = 0;
      m++;
      var v742 = sequenceArray$$2.length;
      v38 = m < v742
    }
    k$$3++;
    var v743 = sequenceArray$$2.length;
    v39 = k$$3 < v743
  }
  return true
}
function v3() {
  try {
    identSim()
  }catch(e$$13) {
    var v746 = "The following error was encountered: " + e$$13;
    v746 += "\n" + e$$13.stack;
    print(v746)
  }
}
var outputWindow;
v3();
//JAMScript.stopProfile("load");
