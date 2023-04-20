﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Execution.VM.Instruction",{1998:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1998\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Execution.&#8203;VM.</span>&#8203;Instruction</div></div></div></div>",2000:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2000\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> OpCode OpCode</div></div></div>",2001:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2001\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> SymbolRef Symbol</div></div></div>",2002:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2002\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> SymbolRef[] SymbolList</div></div></div>",2003:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2003\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal string</span> Name</div></div></div>",2004:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2004\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> DynValue Value</div></div></div>",2005:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2005\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal int</span> NumVal</div></div></div>",2006:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2006\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal int</span> NumVal2</div></div></div>",2007:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2007\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> SourceRef SourceCodeRef</div></div></div>",2009:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2009\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> Instruction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SourceRef&nbsp;</td><td class=\"PName last\">sourceref</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2010:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2010\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override string</span> ToString()</div></div></div>",2011:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2011\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private string</span> PurifyFromNewLines(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">Value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2012:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2012\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private string</span> GenSpaces()</div></div></div>",2013:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2013\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal void</span> WriteBinary(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BinaryWriter&nbsp;</td><td class=\"PName last\">wr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">baseAddress,</td></tr><tr><td class=\"PType first\">Dictionary&lt;SymbolRef, <span class=\"SHKeyword\">int</span>&gt;&nbsp;</td><td class=\"PName last\">symbolMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2014:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2014\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> WriteSymbol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BinaryWriter&nbsp;</td><td class=\"PName last\">wr,</td></tr><tr><td class=\"PType first\">SymbolRef&nbsp;</td><td class=\"PName last\">symbolRef,</td></tr><tr><td class=\"PType first\">Dictionary&lt;SymbolRef, <span class=\"SHKeyword\">int</span>&gt;&nbsp;</td><td class=\"PName last\">symbolMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2015:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2015\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> SymbolRef ReadSymbol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BinaryReader&nbsp;</td><td class=\"PName last\">rd,</td></tr><tr><td class=\"PType first\">SymbolRef[]&nbsp;</td><td class=\"PName last\">deserializedSymbols</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2016:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2016\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal static</span> Instruction ReadBinary(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SourceRef&nbsp;</td><td class=\"PName last\">chunkRef,</td></tr><tr><td class=\"PType first\">BinaryReader&nbsp;</td><td class=\"PName last\">rd,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">baseAddress,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">envTable,</td></tr><tr><td class=\"PType first\">SymbolRef[]&nbsp;</td><td class=\"PName last\">deserializedSymbols</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2017:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2017\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> DynValue ReadValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BinaryReader&nbsp;</td><td class=\"PName last\">rd,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">envTable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2018:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2018\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> DumpValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BinaryWriter&nbsp;</td><td class=\"PName last\">wr,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2019:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2019\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal void</span> GetSymbolReferences(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">SymbolRef[]&nbsp;</td><td class=\"PName last\">symbolList,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">SymbolRef&nbsp;</td><td class=\"PName last\">symbol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});