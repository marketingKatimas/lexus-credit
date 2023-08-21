document.addEventListener('DOMContentLoaded', function() {
  const elements = {
    //Navbar
    languageToggle: document.getElementById('language-toggle'),
    textHomeIndex: document.getElementById('textHomeIndex'),
    textAboutIndex: document.getElementById('textAboutIndex'),
    textContactIndex: document.getElementById('textContactIndex'),
    textApplyIndex: document.getElementById('textApplyIndex'),

    //Type of Services we Offer
    textTypeOfServices: document.getElementById('textTypeOfServices'),
    textTypeOfServicesP: document.getElementById('textTypeOfServicesP'),

    textPersonalLoan: document.getElementById('textPersonalLoan'),
    textPersonalLoanP: document.getElementById('textPersonalLoanP'),

    textPaydayLoan: document.getElementById('textPaydayLoan'),
    textPaydayLoanP: document.getElementById('textPaydayLoanP'),

    textBusinessLoan: document.getElementById('textBusinessLoan'),
    textBusinessLoanP: document.getElementById('textBusinessLoanP'),

    textDebtConsolidation: document.getElementById('textDebtConsolidation'),
    textDebtConsolidationP: document.getElementById('textDebtConsolidationP'),

    textWeddingLoan: document.getElementById('textWeddingLoan'),
    textWeddingLoanP: document.getElementById('textWeddingLoanP'),




    //Footer
    textUsefulLinks: document.getElementById('textUsefulLinks'),
    textHomeF: document.getElementById('textHomeF'),
    textAboutF: document.getElementById('textAboutF'),
    textContactF: document.getElementById('textContactF'),
    textApplyNowF: document.getElementById('textApplyNowF'),

    textOurService: document.getElementById('textOurService'),
    textPersonalF: document.getElementById('textPersonalF'),
    textPaydayF: document.getElementById('textPaydayF'),
    textBusinessF: document.getElementById('textBusinessF'),
    textDebtF: document.getElementById('textDebtF'),
    textIslamicF: document.getElementById('textIslamicF'),
    textWeddingF: document.getElementById('textWeddingF'),
    textRenovationF: document.getElementById('textRenovationF'),
    textMedicalF: document.getElementById('textMedicalF'),
    textEducationF: document.getElementById('textEducationF'),

    textOurInformation: document.getElementById('textOurInformation'),
    textPrivacyPlicy: document.getElementById('textPrivacyPlicy'),
    textTerm: document.getElementById('textTerm'),


  };

  // Check the current language preference and update the switch accordingly
  if (localStorage.getItem('language') === 'bm') {
    elements.languageToggle.checked = 'bm';
    updateContent('bm');
  } else {
    elements.languageToggle.checked = 'en';
    updateContent('en');
  }

  // Add event listener to the language toggle select
  elements.languageToggle.addEventListener('change', function () {
      if (this.checked) {
        updateContent('bm');
        localStorage.setItem('language', 'bm');
      } else {
        updateContent('en');
        localStorage.setItem('language', 'en');
      }
    })

  function updateContent(language) {
    const translations = {
      // Navbar
      textHomeIndex: { en: 'Home', bm: 'Laman Utama' },
      textAboutIndex: { en: 'About Us', bm: 'Tentang Kami' },
      textContactIndex: { en: 'Contact', bm: 'Hubungi Kami' },
      textApplyIndex: { en: 'Apply Now', bm: 'Mohon Sekarang' },

      // //Type of Services We Offer
      // textTypeOfServices: { 
      //   en: 'Types of services we offer', 
      //   bm: 'Jenis perkhidmatan yang kami tawarkan'
      // },
      // textTypeOfServicesP: { 
      //   en: 'We offer different kinds of loans depending on amount approved and tenure with low interest rates.', 
      //   bm: 'Kami menawarkan pelbagai jenis pinjaman bergantung pada jumlah yang diluluskan dan tempoh dengan kadar faedah yang rendah.'
      // },

      // textPersonalLoan: { 
      //   en: 'PERSONAL LOAN', 
      //   bm: 'PEMBIAYAAN PERIBADI'
      // },
      // textPersonalLoanP: { 
      //   en: 'With our personal loan, you will receive a personalised plan based on your creditworthiness and income, so your monthly repayments are well within budget, without overburdening your finance.', 
      //   bm: 'Dengan pembiayaan peribadi kami, anda akan menerima pelan peribadi berdasarkan kelayakan kredit dan pendapatan anda, agar bayaran balik anda mengikuti bajet tanpa membebankan kewangan anda.'
      // },

      // textPaydayLoan: { 
      //   en: 'PAYDAY LOAN', 
      //   bm: 'PEMBIAYAAN HARI GAJI'
      // },
      // textPaydayLoanP: { 
      //   en: 'For unexpected situations, our payday loans exist to provide instant financial relief that you need. Navigate through challenging situations with fast and accessible loans until your next paycheck. ', 
      //   bm: 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda bantuan kewangan segera. Tangani situasi mencabar dengan pembiayaan pantas dan selamat sehingga hari gaji seterusnya.'
      // },

      // textBusinessLoan: { 
      //   en: 'BUSINESS LOAN', 
      //   bm: 'PEMBIAYAAN BISNES'
      // },
      // textBusinessLoanP: { 
      //   en: 'Our business loan provides capital for your business to expand your startups and manage better cash flow. With our low interest rate, we can help fuel your business journey better.', 
      //   bm: 'Pembiayaan bisnes kami menyediakan modal untuk bisnes anda supaya anda dapat kembangkan perniagaan dan urus cash flow anda dengan lebih bijak. Dengan kadar faedah rendah, pilih pembiayaan bisnes kami untuk perkembangan perniagaan anda. '
      // },

      // textDebtConsolidation: { 
      //   en: 'DEBT CONSOLIDATION', 
      //   bm: 'PENYATUAN HUTANG'
      // },
      // textDebtConsolidationP: { 
      //   en: 'Dont let multiple debts weigh you down! Manage and reduce your interest burden and take control of your finances with our low interest rate solution.', 
      //   bm: 'Jangan biarkan hutang berlambak membebankan anda! Urus dan kurangkan beban faedah dan kawal kewangan anda dengan khidmat penyatuan hutang kami yang berfaedah rendah.'
      // },

      // textIslamic: { 
      //   en: 'ISLAMIC FINANCING', 
      //   bm: 'PEMBIAYAAN ISLAMIK'
      // },
      // textIslamicP: { 
      //   en: 'Our Islamic loans are shariah-compliant with complete adherence to the tawarruq system, ensuring transparency and fairness. Pursue your financial goals with us with confidence and trust!', 
      //   bm: 'Pembiayaan Islamik kami patuh pada syariah dan mengikuti sistem tawarruq, memastikan pembiayaan kami telus dan adil. Kecapi matlamat kewangan anda dengan yakin dan amanah!'
      // },

      // textWeddingLoan: { 
      //   en: 'WEDDING LOAN', 
      //   bm: 'PEMBIAYAAN KAHWIN'
      // },
      // textWeddingLoanP: { 
      //   en: 'Getting married? Fund your dream wedding with us! Our wedding loan is designed to cover all your wedding expenses so you can enjoy the day you’ll remember forever.', 
      //   bm: 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan perkahwinan kami! Pembiayaan ini merangkumi segala keperluan kahwin anda supaya anda dapat nikmati hari bahagia tanpa gelisah.'
      // },

















      //Footer
      textUsefulLinks: { en: 'Useful Links', bm: 'Pautan Berguna' },
      textHomeF: { en: 'Home', bm: 'Laman Utama' },
      textAboutF: { en: 'About Us', bm: 'Tentang Kami' },
      textContactF: { en: 'Contact Us', bm: 'Hubungi Kami' },
      textApplyNowF: { en: 'Apply Now', bm: 'Mohon Sekarang' },

      textOurService: { en: 'Our Services', bm: 'Perkhidmatan Kami' },
      textPersonalF: { en: 'Personal Loan', bm: 'Pembiayaan Peribadi' },
      textPaydayF: { en: 'Payday Loan', bm: 'Pembiayaan Hari Gaji' },
      textBusinessF: { en: 'Business Loan', bm: 'Pembiayaan Bisnes' },
      textDebtF: { en: 'Debt Conslidation', bm: 'Penyatuan Hutang' },
      textIslamicF: { en: 'Islamic Financing', bm: 'Pembiayaan Islamik' },
      textWeddingF: { en: 'Wedding Loan', bm: 'Pembiayaan Kahwin' },
      textRenovationF: { en: 'Renovation Loan', bm: 'Pembiayaan Renovasi' },
      textMedicalF: { en: 'Medical Loan', bm: 'Pembiayaan Perubatan' },
      textEducationF: { en: 'Education Loan', bm: 'Pembiayaan Pendidikan' },

      textOurInformation: { en: 'Our Information', bm: 'Maklumat Kami' },
      textPrivacyPlicy: { en: 'Privacy Policy', bm: 'Dasar Privasi' },
      textTerm: { en: 'Terms & Conditions', bm: 'Terma & Syarat' },
      

      
    };

    for (const key in elements) {
      if (elements.hasOwnProperty(key)) {
        const element = elements[key];
        const translation = translations[key];
        if (translation) {
          if (/<[a-z][\s\S]*>|<br>/i.test(translation[language])) {
            element.innerHTML = translation[language];
          } else {
            element.textContent = translation[language];
          }
        }
      }
    }
  }
});

