
let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「✨  𝑁𝐴𝑇𝑺𝑈   ✨ 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 ✨  bot  ✨ 」─*`, m)
}
handler.help = ['verdad']
handler.tags = ['fun']
handler.command = /^لو/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"لو خيروك تكون عندك فلوس كثير وراسك حمار?",
                 "لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين",  
 "لو خيروك بين فقدان ذاكرلو والعيش مع أصدقائك وأقربائك أو بقاء ذاكرلو ولكن العيش وحيد.", 
 "لو خيروك بين تناول الخضار والفاكهة طوال حيالو أو تناول اللحوم.",  
 " لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط.",  
 "               *لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف.", 
 "لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران.",  
 "لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل.",  
 "لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقية.",  
 " لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار.",  
 " لو خيروك بين الحقد أو المسامحة.",  
 " لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى.",  
 " لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي.",  
 " لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب.",  
 " لو خيروك بين أن تحصل على درجة كاملة في كامل اختبارالو القادمة والسابقة أو أن تسافر إلى بلد تحبه.",  
 "لو خيروك لتختار نوع طفلك القادم المفضل، ستختار ولد أم بنت، ماذا تختار؟",  
 " لو خيروك بين عمل براتب عالي ولكنك لا تحبه وبين عمل تحبه ولكن راتبه ضعيف، ماذا تختار؟",  
 " لو خيروك بين حلاقة شعرك زيروو أو عدم الحلاقة لمدة عام، ماذا تختار؟",  
 " لو خيروك بين عمل عمرة وزيارة الكعبة المشرفة، وبين زيارة سياحية في فرنسا وزيارة برج إيفل، ماذا تختار؟",  
 " لو خيروك بين أن تنافق شخص لا تحبه لكي تحصل على فرصة عمل، أو لا تحصل عليها بلا نفاق، ماذا تختار؟",  
 " لو خيروك بين زوج أو زوجة تحبك كثيراً ولكنها قاسية وعصبية، وبين زوج أو زوجة تحبك قليلاً ولكنها طيبة وحنونة، ماذا تختار؟",  
 " لو خيروك بين زيادة وزنك وطولك بـ( 5كجم) و(5سم)، وبين نقصان طولك ووزنك بنفس القيمة، ماذا تختار؟", 
 "لو خيروك بين تناول اللحم أو الدجاج مدى الحياة ماذا تختار؟",  
 "لو خيروك بين تناول الخضروات أو الفواكه مدى الحياة ماذا تختار؟",  
 "لو خيروك بين العيش في نيويورك أو في لندن أيهما تختار؟",  
 "لو خيروك بين السفر إلى الهند أو إلى إيطاليا أيهما تختار؟",  
 "لو خيروك بين العودة إلى الماضي أو الذهاب إلى المستقبل أيهما تختار؟", 
 "لو خيروك ان تاكل خفافيش و صراصير مدي الحياه ولاكن تعيش في افخم انواع القصور او تاكل افخم انواع الاكل ولاكن تعيش في بيت مسكون بالجن؟" , 
 "لو خيروك بين الحب و المال ماذا تختار؟" , 
 "لو خيروك تغير اسمك ولا تبقي علي ما انت عليه؟" , 
 "لو خيروك ان تغير جنسيتك ام تبقي علي ما انت عليه؟" , 
 "لو خيروك الراب فقط في العالم ام الهيب هوب فقط في العالم ماذا تختار؟" , 
 "لو خيروك ان تدخل في فيلم ام مسلسل ماذا تختار؟ " , 
 "لو خيروك ان لوفي يموت ام زورو يموت ماذا تختار؟" , 
 "لو خيروك ان يصبح اليوم ٧٢ ساعة ام يبقي على ما عليه؟" , 
 "لو خيروك السفر الي بلد أوروبية ام السفر الي بلد عربية ماذا تختار؟" , 
" لو خيروك بين أمك وأبوك" , 
 "لو خيروك انت تموت ولا مراتك" , 
 "لو خيروك انك تشتري هديه لاحد افراض عائلتك فلمن تعطيها ؟" , 
 "لو خيروك بين شخص تحبه او شخص يحبك فمن تختار ؟" , 
 "لو خيروك تفقد سنانك الاماميه ولا تفقد ابن عمك ؟" , 
  " لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر."
 ] 