const steps = {

  start: {
    question: "今の状況に近いものを選んでください",
    options: [
      {
        text: "怖い・不安",
        next: "fear"
      },
      {
        text: "トラブル相談したい",
        next: "trouble"
      }
    ]
  },

  fear: {
    question: "今すぐ危険がありますか？",
    options: [
      {
        text: "今すぐ危険",
        action: "tel:110"
      },
      {
        text: "相談したい",
        action: "tel:#9110"
      }
    ]
  },

  trouble: {
    question: "警察に相談したい内容ですか？",
    options: [
      {
        text: "はい",
        action: "tel:#9110"
      },
      {
        text: "違うかも",
        next: "end"
      }
    ]
  },

  end: {
    question: "市区町村窓口なども確認してください。",
    options: [
      {
        text: "最初に戻る",
        next: "start"
      }
    ]
  }

};