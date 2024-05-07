let str =
  "hello nameeeee my name is zaid jdksjdkjskjdkjskjdkskjdkjskjdkjskjdkjsd skjdksjkdjskjdkjskdkjskdjks hahahahahhahah   pokeonoernoonononotnonrotnornntooioioimoioxuodunowue ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp";

function longestWordInSentence(str) {
  let word = str.split(" ");
  let max = 0;
  let str1 = "";
  //   console.log(word);
  word.map((w) => {
    if (w.length >= max) {
      //   max = w.length;
      str1 = w;
    }
  });
  console.log(str1);
  return max;
}

longestWordInSentence(str);
