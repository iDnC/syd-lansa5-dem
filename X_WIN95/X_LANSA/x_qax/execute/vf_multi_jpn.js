/* -------------------------------------------------------------------------------- */
/*	TO EXECUTE THE VISUAL LANSA FRAMEWORK BROWSER EXTENSION IN LANGUAGE CODE ENG    */
/*	YOU DO NOT NEED TO CHANGE OR DEPLOY THIS FILE.               			        */
/* -------------------------------------------------------------------------------- */
/* This file contains the English multilingual text strings used in the browser     */
/*	extension of the Visual LANSA Framework.										*/
/*																					*/
/* To translate the text strings into a different language:							*/
/*																					*/
/*	1. Modify the name of the function VF_MULTI_LoadTextStrings_ENG() to			*/
/*		replace the ENG language code string with the desired language code.		*/
/*		For example, to use language code FRA, change to:							*/
/*																					*/
/*		VF_MULTI_LoadTextStrings_FRA()											    */
/*																					*/
/*		To use language code TCHI, change to:										*/
/*																					*/
/*		VF_MULTI_LoadTextStrings_TCHI()												*/
/*																					*/
/*		To use language code NAT, change to:										*/
/*																				    */
/*		VF_MULTI_LoadTextStrings_NAT()												*/
/*																			    	*/
/*	2. Do not translate things that are not in double quotes         				*/
/*																				    */
/*	3. Do not translate lines marked as "Do not translate"                          */
/*		                                                                        	*/
/*	4. Translate the text strings enclosed in double quotes           	            */
/*                                                                                  */
/*  5. Always save this file as a UTF8 encoded text file                            */
/* -------------------------------------------------------------------------------- */
  
function VF_MULTI_LoadTextStrings_JPN()
{
    
   /* Dereference the system array for easier and faster access */

//#ifscript
     var arraystrText = VF_System.arraystrMultilingualText; 
//#else
//#  var arraystrText : String[] = VF_System.arraystrMultilingualText; 
//#endif   
  
   /* ================== */ 
   /* Define the strings */   
   /* ================== */ 

   /* arraystrText[nnn] = "Text string"  */

      arraystrText[0]  = "技術ｻﾎﾟｰﾄ...";       
      arraystrText[1]  = "Visual LANSA ﾌﾚｰﾑﾜｰｸ";   
      arraystrText[2]  = "ﾛｰﾄﾞできませんでした";   
      arraystrText[3]  = "不明な理由のためにﾛｰﾄﾞできませんでした";   
      arraystrText[4]  = "致命的ｴﾗｰｳｨﾝﾄﾞｳ"; 
      arraystrText[5]  = "ﾂﾘｰﾋﾞｭｰ"; 
      arraystrText[6]  = "ﾘｽﾄﾋﾞｭｰ"; 
      arraystrText[7]  = "ｼｽﾃﾑｽﾀｰﾄｱｯﾌﾟの間、ｻｰﾊﾞｰｼｽﾃﾑに接続することはできません"; 
      arraystrText[8]  = "ﾋﾞｼﾞｰ"; 
      arraystrText[9]  = "ﾚﾃﾞｨ"; 
      arraystrText[10] = "致命的なｴﾗｰ"; 
      arraystrText[11] = "ﾌｧﾝｸｼｮﾝで致命的ｴﾗｰが見つかりました "; 
      arraystrText[12] = "ｴﾗｰの明細 :"; 
      arraystrText[13] = ""; 
      arraystrText[14] = "ｼｽﾃﾑは’閉じる’か’ｻｲﾝｵﾌ’の要求によってｸﾛｰｽﾞしました。"; 
      arraystrText[15] = "ｼｽﾃﾑはﾒｲﾝｳｨﾝﾄﾞｳを閉じるか、別のｻｲﾄに移動することにより、ｸﾛｰｽﾞされました。’閉じる’ﾒﾆｭｰｵﾌﾟｼｮﾝを使用してください（可能な場合)."; 
      arraystrText[16] = "ｻｰﾊﾞｰｼｽﾃﾑに接続することができなかったため、ｼｽﾃﾑは終了しました"; 
      arraystrText[17] = "ｼｽﾃﾑ再ｽﾀｰﾄ"; 
      arraystrText[18] = "このｳｨﾝﾄﾞｳを閉じる"; 
      arraystrText[19] = "ｻｰﾊﾞｰからｼｽﾃﾑ定義の明細をﾛｰﾄﾞしています"; 
      arraystrText[20] = "ｻｰﾊﾞｰｼｽﾃﾑとの初期接続を確立しています"; 
      arraystrText[21] = "ﾕｰｻﾞｰｲﾝﾀｰﾌｪｰｽを作成しています"; 
      arraystrText[22] = "ｼｽﾃﾑを初期化しています"; 
      arraystrText[23] = "初期化が正しく完了しました"; 
      arraystrText[24] = "ｻｰﾊﾞｰｼｽﾃﾑでﾘｸｴｽﾄを実行しています"; 
      arraystrText[25] = "ﾘｸｴｽﾄをｻｰﾊﾞｰｼｽﾃﾑへ送信しました"; 
      arraystrText[26] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへｻｲﾝｵﾝしなかったため、ｼｽﾃﾑは終了しました。"; 
      arraystrText[27] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへのｻｲﾝｵﾝが失敗しました。指定されたﾕｰｻﾞｰﾌﾟﾛﾌｧｲﾙ/ﾊﾟｽﾜｰﾄﾞは無効です。"; 
      arraystrText[28] = "ｻｲﾝｵﾝしなかったため、ｼｽﾃﾑは終了しました。"; 
      arraystrText[29] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへｻｲﾝｵﾝしています。"; 
      arraystrText[30] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへｻｲﾝｵﾝします"; 
      arraystrText[31] = "ﾕｰｻﾞｰ"; 
      arraystrText[32] = "ﾊﾟｽﾜｰﾄﾞ"; 
      arraystrText[33] = "ｻｲﾝｵﾝ"; 
      arraystrText[34] = "ｷｬﾝｾﾙ"; 
      arraystrText[35] = "現行のWEBEVENTﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗで問題が見つかりました。 この問題には多くの原因があります。\r(1). ﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗの実行に失敗し、Webｻｰﾊﾞｰ上で異常終了しました。\r(2). ﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗは正しくｾｯﾄｱｯﾌﾟされませんでした。\r詳細はｵﾝﾗｲﾝｶﾞｲﾄﾞのﾄﾗﾌﾞﾙｼｭｰﾃｨﾝｸﾞを参照し、問題解決ﾁｪｯｸﾘｽﾄを確認してください。\r簡単なﾁｪｯｸﾘｽﾄを示します:\r=> ﾌｧﾝｸｼｮﾝがｵﾌﾟｼｮﾝ*DIRECTと*WEBEVENTを使用。.\r=> 最初のｺﾏﾝﾄﾞは Include Process(*Direct) Function(VFSTART)を含む。\r=> 最後から2番目のｺﾏﾝﾄﾞは Include Process(*Direct) Function(VFEND)を含む。\r=> 実行される最後のｺﾏﾝﾄﾞはDISPLAYかREQUEST。 \r=> DISPLAY/REQUESTｺﾏﾝﾄﾞは１つのみ。\r=> Include Process(*Direct) Function(VFSTART)は一度のみ実行。\r=> Include Process(*Direct) Function(VFEND)は一度のみ実行。\r=> 全てのVF_とFP_組込み関数はInclude Process(*Direct) Function(VFSTART) と Include Process(*Direct) Function(VFEND)の間で実行する。前や後ろは不可。.\r=> DISPLAY/REQUESTｺﾏﾝﾄﾞのﾌｨｰﾙﾄﾞはﾗﾍﾞﾙか記述が識別される。欄見出しは使用しない。 \r=> DISPLAY/REQUESTｺﾏﾝﾄﾞではDESIGN(*DOWN)を使用。\r=> ｺﾏﾝﾄﾞﾊﾝﾄﾞﾗまたはﾌｨﾙﾀが属するﾌﾟﾛｾｽは開発者のｺﾝｿｰﾙで正しくｾｯﾄｱｯﾌﾟされている（例：LANSA for the Webｽｹﾙﾄﾝは所有するﾌﾟﾛｾｽで正しく作成されている)。\r=> 全てのｵﾌﾞｼﾞｪｸﾄ割当とﾛｯｸはﾌｧﾝｸｼｮﾝ完了時に開放された。 \r=> 全てのﾃﾞｰﾀﾍﾞｰｽの変更はﾌｧﾝｸｼｮﾝ完了時にｺﾐｯﾄされた。 \r=>VF_TRACEAVALUEとVF_TRACENVALUE組込関数を使用して出力される追加ﾕｰｻﾞｰﾄﾚｰｽ明細を作るために、ﾄﾚｰｽﾓｰﾄﾞでﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗを実行してみてください。"; 
      arraystrText[36] = "ﾄﾚｰｽ明細のｸﾘｱ"; 
      arraystrText[37] = "ｸﾗｲｱﾝﾄ側ﾄﾚｰｽ明細は青で表示。"; 
      arraystrText[38] = "ｻｰﾊﾞｰ側ﾄﾚｰｽ明細は赤で表示。"; 
      arraystrText[39] = "ﾒｯｾｰｼﾞは緑で表示。"; 
      arraystrText[40] = "時間"; 
      arraystrText[41] = "時"; 
      arraystrText[42] = "分"; 
      arraystrText[43] = "秒"; 
      arraystrText[44] = "値 "; 
      arraystrText[45] = " 無効"; 
      arraystrText[46] = " ﾘｾｯﾄされた"; 
      arraystrText[47] = "日付"; 
      arraystrText[48] = "January"; 
      arraystrText[49] = "February"; 
      arraystrText[50] = "March"; 
      arraystrText[51] = "April"; 
      arraystrText[52] = "May"; 
      arraystrText[53] = "June"; 
      arraystrText[54] = "July"; 
      arraystrText[55] = "August"; 
      arraystrText[56] = "September"; 
      arraystrText[57] = "October"; 
      arraystrText[58] = "November"; 
      arraystrText[59] = "December";

/* These strings are used as the Day headers in Modal Calendar. You could use only one letter, eg M T W, etc */
      
      arraystrText[60] = "月"; 
      arraystrText[61] = "火"; 
      arraystrText[62] = "水"; 
      arraystrText[63] = "木"; 
      arraystrText[64] = "金"; 
      arraystrText[65] = "土"; 
      arraystrText[66] = "日";

/*                                    */
      arraystrText[67] = "利用可能なﾒｯｾｰｼﾞがありません";
      arraystrText[68] = "ﾒｯｾｰｼﾞ";

      arraystrText[69] = "ﾂｰﾙﾊﾞｰ上に表示";

      arraystrText[70] = "**SPARE**";
 
      arraystrText[71] = "JAN"; /* Do not Translate */
      arraystrText[72] = "FEB"; /* Do not Translate */
      arraystrText[73] = "MAR"; /* Do not Translate */
      arraystrText[74] = "APR"; /* Do not Translate */
      arraystrText[75] = "MAY"; /* Do not Translate */
      arraystrText[76] = "JUN"; /* Do not Translate */
      arraystrText[77] = "JUL"; /* Do not Translate */
      arraystrText[78] = "AUG"; /* Do not Translate */
      arraystrText[79] = "SEP"; /* Do not Translate */
      arraystrText[80] = "OCT"; /* Do not Translate */
      arraystrText[81] = "NOV"; /* Do not Translate */
      arraystrText[82] = "DEC"; /* Do not Translate */

      arraystrText[83] = "月曜日"; 
      arraystrText[84] = "火曜日"; 
      arraystrText[85] = "水曜日"; 
      arraystrText[86] = "木曜日"; 
      arraystrText[87] = "金曜日"; 
      arraystrText[88] = "土曜日"; 
      arraystrText[89] = "日曜日"; 

      arraystrText[90] = "月"; 
      arraystrText[91] = "火"; 
      arraystrText[92] = "水"; 
      arraystrText[93] = "木"; 
      arraystrText[94] = "金"; 
      arraystrText[95] = "土"; 
      arraystrText[96] = "日"; 

      arraystrText[97]  = "ｻｰﾊﾞｰｼｽﾃﾑはｱｸｾｽを拒否しました。"; 
      arraystrText[98]  = "使用しているﾌﾚｰﾑﾜｰｸはﾌﾞﾗｳｻﾞﾍﾞｰｽｱﾌﾟﾘｹｰｼｮﾝとして使用可能となっていません。"; 
      arraystrText[99]  = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへのｻｲﾝｵﾝが失敗しました。指定されたﾊﾟｽﾜｰﾄﾞは正しくありません。"; 
      arraystrText[100] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへのｻｲﾝｵﾝが失敗しました。このｱﾌﾟﾘｹｰｼｮﾝﾌﾚｰﾑﾜｰｸを使用する権限を持っていません。詳細はｼｽﾃﾑ管理者へ問い合わせてください。"; 
      arraystrText[101] = "ﾘﾓｰﾄｻｰﾊﾞｰｼｽﾃﾑへのｻｲﾝｵﾝが失敗しました。ｱﾌﾟﾘｹｰｼｮﾝﾌﾚｰﾑﾜｰｸｾｷｭﾘﾃｨが使用可能になっていますが、使用されたﾕｰｻﾞｰﾌﾟﾛﾌｧｲﾙがｱﾌﾟﾘｹｰｼｮﾝﾌﾚｰﾑﾜｰｸｾｷｭﾘﾃｨｼｽﾃﾑで定義されていません。."; 

      arraystrText[102] = "戻る/進むｷｰは無視されました。"; 
      arraystrText[103] = " ﾄﾚｰｽ明細の印刷 "; 
      arraystrText[104] = "時間"; 
      arraystrText[105] = "ﾄﾚｰｽｲﾍﾞﾝﾄ"; 

      arraystrText[106] = "上へ"; 
      arraystrText[107] = "下へ"; 
      arraystrText[108] = "ｶﾚﾝﾀﾞｰ"; 
      arraystrText[109] = "XMLﾃﾞｰﾀｱｲﾗﾝﾄﾞ（もしくは同等のｽｸﾘﾌﾟﾄ)が見つからないか、無効です。 この問題には多くの原因があります。 原因のいくつかを示します。: (1). 無効または存在しない物理/ﾊﾞｰﾁｬﾙﾃﾞｨﾚｸﾄﾘ名が管理者ｺﾝｿｰﾙで指定された。 (2). SSIｻﾎﾟｰﾄの設定がWebｻｰﾊﾞｰで正しく構成されていない。 (3). ｺｰﾄﾞﾍﾟｰｼﾞ変換が無効なXMLを作成する原因となっている。 (4). 他の原因: 詳細は製品ﾄﾞｷｭﾒﾝﾄを参照してください。"; 

      arraystrText[110] = "入力値は指定された長さに切り捨てられます"; 
      arraystrText[111] = "長さ、小数点の数、値が無効です"; 

      arraystrText[112] = "ｺﾋﾟｰ"; 
      arraystrText[113] = "貼り付け"; 

      arraystrText[114] = "ﾀﾞｳﾝﾛｰﾄﾞ";   
      arraystrText[115] = "ｱｯﾌﾟﾛｰﾄﾞ"; 
      arraystrText[116] = "ﾌｧｲﾙｻｲｽﾞが許可された最大数より大きい"; 
      arraystrText[117] = "ｱｯﾌﾟﾛｰﾄﾞされないﾌｧｲﾙ"; 
      arraystrText[118] = "ﾌｧｲﾙが見つからない"; 

      arraystrText[119] = "警告: ｻｰﾊﾞｰからﾀﾞｳﾝﾛｰﾄﾞ(または以前のｷｬｯｼｭ）されるｻｰﾊﾞｰｿﾌﾄｳｴｱとｸﾗｲｱﾝﾄｿﾌﾄｳｴｱはﾋﾞﾙﾄﾞ番号が異なります。 ｻｰﾊﾞｰｿﾌﾄｳｴｱﾋﾞﾙﾄﾞ番号 "; 
      arraystrText[120] = ". ﾀﾞｳﾝﾛｰﾄﾞされたｸﾗｲｱﾝﾄｿﾌﾄｳｴｱﾋﾞﾙﾄﾞ番号 "; 
      arraystrText[121] = ". この警告ﾒｯｾｰｼﾞを表示させないためには、ﾌﾞﾗｳｻﾞのｷｬｯｼｭをｸﾘｱしてこのｱﾌﾟﾘｹｰｼｮﾝを再ｽﾀｰﾄしてください。それでもこの警告が表示される場合はｱﾌﾟﾘｹｰｼｮﾝﾌﾟﾛﾊﾞｲﾀﾞへこの警告ﾒｯｾｰｼﾞを報告してください。"; 

      arraystrText[122] = "このｱﾌﾟﾘｹｰｼｮﾝは使用中にﾛｯｸされました。 "; 
      arraystrText[123] = "のみ "; 
      arraystrText[124] = " このｱﾌﾟﾘｹｰｼｮﾝをｱﾝﾛｯｸできます。 "; 
      arraystrText[125] = "もしﾕｰｻﾞｰの場合 "; 
      arraystrText[126] = " このｱﾌﾟﾘｹｰｼｮﾝの使用を続けるためにﾊﾟｽﾜｰﾄﾞを再度入力してｸﾘｯｸしてください。 "; 
      arraystrText[127] = "このｱﾌﾟﾘｹｰｼｮﾝを終了するためにはｷｬﾝｾﾙをｸﾘｯｸしてください。"; 
      arraystrText[128] = "ﾚｼﾞｭｰﾑ"; 
      arraystrText[129] = "不活動でﾀｲﾑｱｳﾄしたため、ｼｽﾃﾑは自動的にｸﾛｰｽﾞされます。"; 

      arraystrText[130] = "警告: ﾌｫｰﾑﾚｲｱｳﾄの変更は保存されませんでした。";
      arraystrText[131] = "ﾌｫｰﾑﾚｲｱｳﾄの変更を保存したい ";
      arraystrText[132] = "OKをｸﾘｯｸするとﾌｫｰﾑﾚｲｱｳﾄの変更が保存されます、ｷｬﾝｾﾙをｸﾘｯｸすると変更の保存は回避されます";
      arraystrText[133] = "ﾌｫｰﾑﾚｲｱｳﾄの変更はﾌｧｲﾙに保存されます ";
      arraystrText[134] = "ﾌｧｲﾙｼｽﾃﾑｵﾌﾞｼﾞｪｸﾄのｲﾝｽﾀﾝｽを作成することができない。";
      arraystrText[135] = "ﾌｧｲﾙｵｰﾌﾟﾝ時にｴﾗｰが発生したため、ﾌｫｰﾑﾚｲｱｳﾄの変更は保存することができません";

      arraystrText[136] = "UB_XXXXX ﾌﾟｯｼｭﾎﾞﾀﾝ";
      arraystrText[137] = "全体のﾎﾞﾀﾝｴﾘｱ <TD>";
      arraystrText[138] = "利用できないﾌﾟﾛﾊﾟﾃｨ";
      arraystrText[139] = "ﾌｫｰﾑ名";
      arraystrText[140] = "ｴﾚﾒﾝﾄ名";
      arraystrText[141] = "ｴﾚﾒﾝﾄﾀｲﾌﾟ";
      arraystrText[142] = "利用できない記述";
      arraystrText[143] = "保存";
      arraystrText[144] = "全体のﾌｨｰﾙﾄﾞｴﾘｱ <TD>";
      arraystrText[145] = "全体のﾌﾞﾗｳｽﾞﾘｽﾄｴﾘｱ <TD>";
      arraystrText[146] = "位置決め";
      arraystrText[147] = "入力ﾌｨｰﾙﾄﾞ";
      arraystrText[148] = "ﾌｨｰﾙﾄﾞﾗﾍﾞﾙ";
      arraystrText[149] = "出力ﾌｨｰﾙﾄﾞ";
      arraystrText[150] = "ﾌｨｰﾙﾄﾞとﾗﾍﾞﾙﾃｰﾌﾞﾙ列 <TR>";
      arraystrText[151] = "ﾌｫｰﾑﾀｲﾄﾙ";
      arraystrText[152] = "説明行";
      arraystrText[153] = "注意行";
      arraystrText[154] = "仕切り";
      arraystrText[155] = "ﾌｧｽﾄﾊﾟｰﾂ";
      arraystrText[156] = "ﾌｧｽﾄﾊﾟｰﾂ ﾗﾍﾞﾙ";
      arraystrText[157] = "再表示";

      arraystrText[158] = "全体のﾌﾞﾗｳｽﾞﾘｽﾄ <TABLE>";
      arraystrText[159] = "全体の欄見出し行 <TR>";
      arraystrText[160] = "個々の欄見出し <TH>";
      arraystrText[161] = "全体のﾃﾞｰﾀ行 <TR>";
      arraystrText[162] = "個々のﾃﾞｰﾀ行 ｾﾙ/ｶﾗﾑ <TD>";
      arraystrText[163] = "入力ﾌｨｰﾙﾄﾞ <INPUT>";
      arraystrText[164] = "出力ﾌｨｰﾙﾄﾞ及び他のDHTMLｴﾚﾒﾝﾄ";

      arraystrText[165] = "DHTML ﾀｸﾞﾀｲﾌﾟ";
      arraystrText[166] = "** 未定義 **";
      arraystrText[167] = "全体のﾌｫｰﾑ <TABLE>";
      arraystrText[168] = "全体のﾌｫｰﾑ <DIV>";
      arraystrText[169] = "全体のﾎﾞﾀﾝｴﾘｱ <TR>";
      arraystrText[170] = "全体のﾌｨｰﾙﾄﾞｴﾘｱ <TR>";
      arraystrText[171] = "全体のﾌﾞﾗｳｽﾞﾘｽﾄｴﾘｱ <TR>";
      arraystrText[172] = "全てのﾌﾟﾛﾊﾟﾃｨ";
      arraystrText[173] = "他のDHTMLｴﾚﾒﾝﾄ及びWebｺﾝﾎﾟｰﾈﾝﾄ";
      arraystrText[174] = "HTML表示";
      arraystrText[175] = "外部HTML";
      arraystrText[176] = "再度ﾌｫｰﾑをｸﾘｯｸしてｵｰﾌﾟﾝする時、ｳｨﾝﾄﾞｳをｸﾛｰｽﾞすることを回避します。";
      arraystrText[177] = "ｶﾗｰﾃｰﾌﾞﾙ";
      arraystrText[178] = "DHTMLﾌﾟﾛﾊﾟﾃｨﾍﾙﾌﾟ";
      arraystrText[179] = "Go";
      arraystrText[180] = "FileSystemObjectﾒｿｯﾄﾞ使用はｴﾗｰで失敗しました";

      arraystrText[181] = "ﾌｨﾙﾀもしくはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗ ";
      arraystrText[182] = " 応答が失敗 ";

      arraystrText[183] = "待つ";
      arraystrText[184] = "ｼｬｯﾄﾀﾞｳﾝ";
      arraystrText[185] = "ﾁｪｯｸ";

      arraystrText[186] = " ﾚｽﾎﾟﾝｽの秒数。";
      arraystrText[187] = "ﾌﾚｰﾑﾜｰｸからｻｲﾝｵﾌ。";
      arraystrText[188] = "Webｻｰﾊﾞｰのｴﾗｰ情報。";

      arraystrText[189] = "現行WAM（Webｱﾌﾟﾘｹｰｼｮﾝﾓｼﾞｭｰﾙ）ﾌｨﾙﾀもしくはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗでｴﾗｰが見つかりました。 この問題には多くの原因があります。 (1). ﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗの実行に失敗し、Webｻｰﾊﾞｰ上で異常終了しました。 (2). ﾌｨﾙﾀまたはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗは正しくｾｯﾄｱｯﾌﾟされませんでした。 このﾀｲﾌﾟの問題の詳細についてはｵﾝﾗｲﾝｶﾞｲﾄﾞのﾄﾗﾌﾞﾙｼｭｰﾃｨﾝｸﾞｾｸｼｮﾝを参照してください。";
      arraystrText[190] = "ｼｽﾃﾑはﾚｽﾎﾟﾝｽの無いﾌｨﾙﾀもしくはｺﾏﾝﾄﾞﾊﾝﾄﾞﾗによって強制的にｼｬｯﾄﾀﾞｳﾝされました。"; 

      arraystrText[191] = "全体のﾌｫｰﾑ <BODY>";

      arraystrText[192] = "ｺｰﾄﾞﾃｰﾌﾞﾙがこのﾌﾚｰﾑﾜｰｸで定義されていないため、ｺｰﾄﾞﾃｰﾌﾞﾙ名の参照は無効です。 ｺｰﾄﾞﾃｰﾌﾞﾙ名 ";

      arraystrText[193] = "電卓";

		/* These are the postfixes for the day in the date that appears in the status bar. */
		/* For example, in English, the first of the month will would be 1 followed by arraystrText[194] */
		/* resulting in 1st. Note that your language might only use one postfix in which case you must */
		/* still modify the four strings. */
		/* If you don't want postfixes at all then use a blank space between the quotes */

      arraystrText[194] = ""; /* used for the first day of the month, 21 and 31 */
      arraystrText[195] = ""; /* used for the second day of the month and 22 */
      arraystrText[196] = ""; /* used for the thrid day of the month and 23 */
      arraystrText[197] = ""; /* used for all the rest of the days of the month  */
      arraystrText[198] = "詳細の情報はWebｻｲﾄを参照してください"; /* default for IntroUrlCaption */

      arraystrText[199] = "自動選択"; 
      
      /* FP_RCALC - Calculator Buttons */
      arraystrText[200] = "Bksp";	
      arraystrText[201] = "CE";		
      arraystrText[202] = "C";	
      arraystrText[203] = "Sqrt";	
      arraystrText[204] = "MC";		
      arraystrText[205] = "MR";		
      arraystrText[206] = "MS";		
      arraystrText[207] = "M+";
      
      /* Stats */

      arraystrText[208] = "全体(秒)";		
      arraystrText[209] = "ｸﾗｲｱﾝﾄ-ｻｲﾄﾞ(秒)";		
      arraystrText[210] = "ｻｰﾊﾞｰ-ｻｲﾄﾞ(秒)";		
      arraystrText[211] = "合計";		
      arraystrText[212] = "平均";		
      arraystrText[213] = "最小";		
      arraystrText[214] = "最大";		
      arraystrText[215] = "活動";		
      arraystrText[216] = "ｲﾍﾞﾝﾄ";		
      arraystrText[217] = "表示された値 <TD>";
      arraystrText[218] = " 秒。どうしますか ?";

      arraystrText[219] = "最大化";
      arraystrText[220] = "復元";
      
      /* More FLA texts */
      arraystrText[221] = "Internet Explorerのｾｷｭﾘﾃｨ設定でｻｰﾊﾞｰへﾚｲｱｳﾄ変更を書き出すために必須となるActive-Xｺﾝﾄﾛｰﾙを許可しないため、問題が発生します。";
      arraystrText[222] = "推奨する解決案はInternet Explorerの信頼されたｻｲﾄﾘｽﾄに開発ｻｰﾊﾞｰのIPｱﾄﾞﾚｽおよびﾎｽﾄ名を追加することです。";
      arraystrText[223] = "閉じる";

      arraystrText[224] = "ｻｲﾝｵﾝの失敗の回数が制限を越えました。ﾕｰｻﾞｰは使用不可となりました";
      arraystrText[225] = "ｻｰﾊﾞｰｼｽﾃﾑで利用可能な追加情報を確認してください";
      arraystrText[226] = "続ける場合はOKをｸﾘｯｸしてください";
      
      arraystrText[227] = "無効な値が入力されました。前回の値が復元されます。";
      arraystrText[228] = "RAMP"; 
      arraystrText[229] = "ｻｰﾊﾞｰｼｽﾃﾑに接続していません";       
      arraystrText[230] = "の最大数に達しました";
      arraystrText[231] = "ﾌﾞﾗｳｻﾞに許可されたRAMPｾｯｼｮﾝ";
      arraystrText[232] = "返されたﾕｰｻﾞ情報が不正です - このﾒｯｾｰｼﾞを製品ﾍﾞﾝﾀﾞｰに送ってください";
      arraystrText[233] = "初期化中";
      arraystrText[234] = "ﾌﾚｰﾑﾜｰｸ作成中";
      arraystrText[235] = "ｾｯｼｮﾝ割り当て開始中";
      arraystrText[236] = "ﾌﾚｰﾑﾜｰｸ作成継続中";
      arraystrText[237] = "ｺｰﾄﾞﾃｰﾌﾞﾙ作成中";
      arraystrText[238] = "初期設定の除去中";
      arraystrText[239] = "ﾕｰｻﾞｰｲﾝﾀｰﾌｪｰｽ作成中";
      arraystrText[240] = "Webｻｰﾊﾞｰからのｾｯｼｮﾝ割り当ての応答を待機中";
      arraystrText[241] = "Webｻｰﾊﾞｰによってｾｯｼｮﾝが割り当てられました - Webｻｰﾊﾞｰにｻｲﾝｵﾝ";
      arraystrText[242] = "Webｻｰﾊﾞｰへのｻｲﾝｵﾝが完了しました";
      arraystrText[243] = "実行環境の構築中";
      arraystrText[244] = "ｽﾀｰﾄｱｯﾌﾟｱﾌﾟﾘｹｰｼｮﾝへ切替中";
      arraystrText[245] = "System Available";
      arraystrText[246] = "RAMPﾉｰﾄﾞとｽｸﾘﾌﾟﾄのXML定義は以下に保管されます";
      arraystrText[247] = "最後に保存された ";      
      arraystrText[248] = "に";      
      arraystrText[249] = " (ｱﾌﾟﾘｹｰｼｮﾝ設計者として使用しているとき、XMLに基づく定義はRAMPｾｯｼｮﾝをｺﾝﾄﾛｰﾙします). このRAMPｾｯｼｮﾝで使用される実行時JavaScriptは、保存されたXMLﾌｧｲﾙから生成されました。";
      arraystrText[250] = " (ｱﾌﾟﾘｹｰｼｮﾝｴﾝﾄﾞﾕｰｻﾞｰとして使用しているとき、実行時JavaScriptはRAMPｾｯｼｮﾝをｺﾝﾄﾛｰﾙします). このﾒｯｾｰｼﾞは、実行時JavaScriptｾｯｼｮﾝが古く最新のXMLから再生成する必要があるかもしれない、ということを意味します。";      

/* Following MTXTs are used for the User Details */

      arraystrText[251] = "ｷｬﾌﾟｼｮﾝ";      
      arraystrText[252] = "保存";      
      arraystrText[253] = "このﾕｰｻﾞｰが属するｸﾞﾙｰﾌﾟ";
      arraystrText[254] = "選択されたﾕｰｻﾞｰﾌﾟﾛﾌｨｰﾙを削除する場合はOKをｸﾘｯｸしてください";
      arraystrText[255] = "ﾕｰｻﾞｰﾌﾟﾛﾌｨｰﾙ";
      arraystrText[256] = "新しいﾊﾟｽﾜｰﾄﾞ";
      arraystrText[257] = "PCの一時ﾃﾞｨﾚｸﾄﾘ";
      arraystrText[258] = "e-mail ｱﾄﾞﾚｽ";
      arraystrText[259] = "非活動ﾛｸﾞｵﾝﾀｲﾑｱｳﾄ"; 
      arraystrText[260] = "新しいﾊﾟｽﾜｰﾄﾞの確認";
      arraystrText[261] = "(分)";
      arraystrText[262] = "設定";
      arraystrText[263] = "非活動ﾛｸﾞｵﾌﾀｲﾑｱｳﾄ";
      arraystrText[264] = "管理ﾕｰｻﾞｰ";
      arraystrText[265] = "ﾕｰｻﾞｰは使用不可";
      arraystrText[266] = "newlookﾕｰｻﾞｰ";
      arraystrText[267] = "newlookﾊﾟｽﾜｰﾄﾞ(任意、めったに使用しない)";
      arraystrText[268] = "newlookｾｯｼｮﾝのﾕｰｻﾞｰ詳細が異なる場合にのみ使用";
      arraystrText[269] = "このﾕｰｻﾞｰが属するｸﾞﾙｰﾌﾟ";
      arraystrText[270] = "内部識別子";
      arraystrText[271] = "新しいﾊﾟｽﾜｰﾄﾞ、新しいﾊﾟｽﾜｰﾄﾞが同じでないことを確認";
      arraystrText[272] = "現在定義されたｸﾞﾙｰﾌﾟはありません";
      arraystrText[273] = "全て選択";
      arraystrText[274] = "全て選択解除";
      arraystrText[275] = "このｸﾞﾙｰﾌﾟは1つまたはそれ以上のﾕｰｻﾞｰに使用されているため、削除できません";      
      arraystrText[276] = "ﾕｰｻﾞｰﾌﾟﾛﾌｨｰﾙ桁数ｴﾗｰ";      
      arraystrText[277] = "ﾊﾟｽﾜｰﾄﾞを(再)指定してください";
      arraystrText[278] = "警告: ﾊﾟｽﾜｰﾄﾞを再入力してください ";            
      arraystrText[279] = "のﾕｰｻﾞｰﾌﾟﾛﾊﾟﾃｨ";  
      arraystrText[280] = " (ｲﾝｽﾀﾝｽｷｬﾌﾟｼｮﾝは指定されていません)";  
      arraystrText[281] = "無効な数値";  
      arraystrText[282] = "選択/選択解除 をｸﾘｯｸ";        
      arraystrText[283] = "ｶｽﾀﾑﾌﾟﾛﾊﾟﾃｨが存在しません";        
      arraystrText[284] = "保存して閉じる";      
      arraystrText[285] = "保存して次を作成";      
            
/* END MTXTs for User Details */

      arraystrText[286] = "webｻｰﾊﾞｰによる応答でエラーが検出されました。\r\rｱﾌﾟﾘｹｰｼｮﾝ終了前に詳細な問題分析情報を表示しますか?";      
      arraystrText[287] = "ｻｰﾊﾞｰｾｯｼｮﾝ割り当てｴﾗｰが発生しました。最も考えられる原因は、ｻｰﾊﾞｰが現在利用不可であるか、またはｻｰﾊﾞｰ構成の問題でこの時ｾｯｼｮﾝを割り当てられなかった、ということです。";      
      arraystrText[288] = "ｻｰﾊﾞｰでの情報交換時に、内部ｴﾗｰが検出されました。 最も考えられる原因は、ｻｰﾊﾞｰが利用不可になったか、またはﾌﾟﾛｸﾞﾗﾑの実行がｻｰﾊﾞｰで失敗した、ということです。";      

      arraystrText[289] = "ﾊﾟｽﾜｰﾄﾞの保存";

      arraystrText[290] = "ﾛｰｶﾙ ﾀｲﾑ";
      arraystrText[291] = "GMT ﾀｲﾑ";
      arraystrText[292] = "ｱﾌﾟﾘｹｰｼｮﾝ";
      arraystrText[293] = "<BUSOBJ>検索";
      arraystrText[294] = "あなたの要求を処理するためにｼｽﾃﾑが現在ﾋﾞｼﾞｰです。後でもう一度試みてください。";
      arraystrText[295] = "ﾃﾞｰﾀ読み込み中...";
      arraystrText[296] = "より多くのﾒｯｾｰｼﾞがあります - 全てのﾒｯｾｰｼﾞを見るために'ﾒｯｾｰｼﾞ'ﾎﾞﾀﾝを押してください";
      arraystrText[297] = "ﾕｰｻﾞｰ設定を省略値へ戻す";
      arraystrText[298] = "次回のｱﾌﾟﾘｹｰｼｮﾝ ｽﾀｰﾄ時に、ﾕｰｻﾞ設定は省略値に戻されます";

      arraystrText[299] = "Webｻｰﾊﾞｰからの応答でｴﾗｰが検出されました。";
      arraystrText[300] = "詳細の表示";
      arraystrText[301] = "ｼｽﾃﾑが致命的ｴﾗｰを受け取りました。ｼｬｯﾄﾀﾞｳﾝする必要があります。ｳｨﾝﾄﾞｳを閉じる前にｴﾗｰの詳細を見ることができます。";

      arraystrText[302] = "ｸｲｯｸ検索...";
      arraystrText[303] = "ﾀｲﾌﾟ検索ｽﾄﾘﾝｸﾞ";
      arraystrText[304] = "最近の使用";
      arraystrText[305] = "検索結果";
      
      arraystrText[306] = "ﾘｽﾄのｸﾘｱ";
      arraystrText[307] = "ﾘｽﾄを表示するﾅﾋﾞｹﾞｰｼｮﾝﾍﾟｲﾝを変更する";
      arraystrText[308] = "ﾂﾘｰを表示するﾅﾋﾞｹﾞｰｼｮﾝﾍﾟｲﾝを変更する";

      arraystrText[309] = "共有ﾃﾝﾌﾟﾚｰﾄ ﾊﾟｯｹｰｼﾞを作成";
      arraystrText[310] = "全選択";
      arraystrText[311] = "選択を解除";
      arraystrText[312] = "ﾊﾟｯｹｰｼﾞ名：";
      arraystrText[313] = "出力先ﾌｫﾙﾀﾞｰ：";
      arraystrText[314] = "ﾊﾟｯｹｰｼﾞ作成";
      arraystrText[315] = "ｷｬﾝｾﾙ";
      arraystrText[316] = "ﾘｽﾄに入力がありません";
      arraystrText[317] = "ﾊﾟｯｹｰｼﾞに生成が成功しました。\nﾊﾟｯｹｰｼﾞをｱｯﾌﾟﾛｰﾄﾞしてください：\n";
      arraystrText[318] = "";
      arraystrText[319] = " からのｳｨﾝﾄﾞｳを作成しようとした時にｴﾗｰが検出されました。このｻｲﾄに対してﾎﾟｯﾌﾟｱｯﾌﾟ ﾌﾞﾛｯｶｰを停止、またはこのｻｲﾄを信頼済みｻｲﾄに登録する必要があるかもしれません。このｴﾗｰはこの後の処理を妨げるものではありません。OK をｸﾘｯｸして進めてください。";
      arraystrText[320] = "IBM i パスワードの変更";
      arraystrText[321] = "古いパスワード";      
      arraystrText[322] = "変更";            
      arraystrText[323] = "IBM i パスワード変更に成功しました。";                  
      arraystrText[324] = "IBM i パスワード変更エラー";                
      arraystrText[325] = "実行が正常に終了しました。成功のコールバッグ ファンクション呼び出し中に致命的なエラーが発生しました。エラー: ";                
      arraystrText[326] = "実行がエラーで終了しました。さらに、 エラーのコールバッグ ファンクション呼び出し中に致命的なエラーが発生しました。エラー: ";                
      arraystrText[327] = "実行がエラーで終了しましたが、コールバッグ ファンクションが提供されませんでした。";                
      arraystrText[328] = " エラーで終了: ";                      
      arraystrText[329] = "実行が正常に終了しましたが、コールバッグ ファンクションが提供されませんでした。";                
      
//#ifnet
//#   // ======================================= 
//#   // Update the maximum text number assigned  
//#   // ======================================= 
//#   //
//#          VF_System.iMultilingualTextHighestIndex = 329;
//#   //
//#endif       
      
    /* Finished */  
    
//#ifnet
//# return "ja-JP";
//#endif    
}
