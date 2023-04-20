﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.IO.UndisposableStream",{3113:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3113\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;IO.</span>&#8203;UndisposableStream</div></div></div><div class=\"TTSummary\">An adapter over Stream which bypasses the Dispose and Close methods.&nbsp; Used to work around the pesky wrappers .NET has over Stream (BinaryReader, StreamWriter, etc.) which think they own the Stream and close them when they shouldn\'t. Damn.</div></div>",3115:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3115\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Stream m_Stream</div></div></div>",3117:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3117\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> UndisposableStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Stream&nbsp;</td><td class=\"PName last\">stream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3118:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3118\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected override void</span> Dispose(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">disposing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3119:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3119\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override void</span> Close()</div></div></div>",3121:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3121\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override bool</span> CanRead { <span class=\"SHKeyword\">get</span> }</div></div></div>",3122:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3122\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override bool</span> CanSeek { <span class=\"SHKeyword\">get</span> }</div></div></div>",3123:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3123\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override bool</span> CanWrite { <span class=\"SHKeyword\">get</span> }</div></div></div>",3125:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3125\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override void</span> Flush()</div></div></div>",3127:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3127\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override long</span> Length { <span class=\"SHKeyword\">get</span> }</div></div></div>",3128:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3128\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override long</span> Position { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",3130:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3130\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override int</span> Read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offset,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3131:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3131\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override long</span> Seek(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">offset,</td></tr><tr><td class=\"PType first\">SeekOrigin&nbsp;</td><td class=\"PName last\">origin</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3132:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3132\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override void</span> SetLength(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3133:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3133\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override void</span> Write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offset,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3134:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3134\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override</span> IAsyncResult BeginRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offset,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count,</td></tr><tr><td class=\"PType first\">AsyncCallback&nbsp;</td><td class=\"PName last\">callback,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3135:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3135\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override</span> IAsyncResult BeginWrite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">offset,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count,</td></tr><tr><td class=\"PType first\">AsyncCallback&nbsp;</td><td class=\"PName last\">callback,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3136:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3136\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override void</span> EndWrite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IAsyncResult&nbsp;</td><td class=\"PName last\">asyncResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3137:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3137\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override int</span> EndRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IAsyncResult&nbsp;</td><td class=\"PName last\">asyncResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3139:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3139\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override bool</span> CanTimeout { <span class=\"SHKeyword\">get</span> }</div></div></div>",3141:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3141\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> Equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3142:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3142\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> GetHashCode()</div></div></div>",3143:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3143\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> ReadByte()</div></div></div>",3145:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3145\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> ReadTimeout { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",3147:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3147\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override string</span> ToString()</div></div></div>",3148:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3148\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override void</span> WriteByte(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3150:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> WriteTimeout { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>"});