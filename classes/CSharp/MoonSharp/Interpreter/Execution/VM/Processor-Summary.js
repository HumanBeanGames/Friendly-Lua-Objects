﻿NDFramePage.OnPageTitleLoaded("CSharpClass:MoonSharp.Interpreter.Execution.VM.Processor","Processor");NDSummary.OnSummaryLoaded("CSharpClass:MoonSharp.Interpreter.Execution.VM.Processor",[["C#","CSharp"]],[["Classes","Class"],["Constants","Constant"],["Functions","Function"],["Groups","Group"],["Properties","Property"],["Variables","Variable"]],[[1934,0,0,"<span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Execution.&#8203;VM.</span>&#8203;Processor"],[1909,0,3,"Variables","Variables"],[1910,0,5,"m_RootChunk","m_RootChunk"],[1911,0,5,"m_ValueStack","m_ValueStack"],[1912,0,5,"m_ExecutionStack","m_ExecutionStack"],[1913,0,5,"m_CoroutinesStack","m_CoroutinesStack"],[1914,0,5,"m_GlobalTable","m_GlobalTable"],[1915,0,5,"m_Script","m_Script"],[1916,0,5,"m_Parent","m_Parent"],[1917,0,5,"m_State","m_State"],[1918,0,5,"m_CanYield","m_CanYield"],[1919,0,5,"m_SavedInstructionPtr","m_SavedInstructionPtr"],[1920,0,5,"m_Debug","m_Debug"],[1927,0,5,"m_OwningThreadID","m_OwningThreadID"],[1928,0,5,"m_ExecutionNesting","m_ExecutionNesting"],[1949,0,5,"AutoYieldCounter","AutoYieldCounter"],[1921,0,3,"Functions","Functions"],[1922,0,2,"Processor","Processor"],[1923,0,2,"Processor","Processor(2)"],[1924,0,2,"Call","Call"],[1925,0,2,"PushClrToScriptStackFrame","PushClrToScriptStackFrame"],[1930,0,2,"LeaveProcessor","LeaveProcessor"],[1931,0,2,"GetThreadId","GetThreadId"],[1932,0,2,"EnterProcessor","EnterProcessor"],[1933,0,2,"GetCoroutineSuspendedLocation","GetCoroutineSuspendedLocation"],[1904,0,2,"IsDumpStream","IsDumpStream"],[1905,0,2,"Dump","Dump"],[1906,0,2,"AddSymbolToMap","AddSymbolToMap"],[1907,0,2,"Undump","Undump"],[1875,0,2,"Coroutine_Create","Coroutine_Create"],[1880,0,2,"Coroutine_Resume","Coroutine_Resume"],[1883,0,2,"FindMeta","FindMeta"],[1884,0,2,"AttachDebugger","AttachDebugger"],[1888,0,2,"ListenDebugger","ListenDebugger"],[1889,0,2,"ResetBreakPoints","ResetBreakPoints"],[1890,0,2,"ResetBreakPoints","ResetBreakPoints(2)"],[1891,0,2,"ToggleBreakPoint","ToggleBreakPoint"],[1892,0,2,"RefreshDebugger","RefreshDebugger"],[1893,0,2,"Debugger_RefreshThreads","Debugger_RefreshThreads"],[1894,0,2,"Debugger_RefreshVStack","Debugger_RefreshVStack"],[1895,0,2,"Debugger_RefreshWatches","Debugger_RefreshWatches"],[1896,0,2,"Debugger_RefreshLocals","Debugger_RefreshLocals"],[1897,0,2,"Debugger_RefreshWatch","Debugger_RefreshWatch"],[1898,0,2,"Debugger_GetCallStack","Debugger_GetCallStack"],[1864,0,2,"GetCurrentSourceRef","GetCurrentSourceRef"],[1865,0,2,"FillDebugData","FillDebugData"],[1868,0,2,"GetMetatable","GetMetatable"],[1869,0,2,"GetBinaryMetamethod","GetBinaryMetamethod"],[1870,0,2,"GetMetamethod","GetMetamethod"],[1871,0,2,"GetMetamethodRaw","GetMetamethodRaw"],[1872,0,2,"GetScript","GetScript"],[1951,0,2,"Processing_Loop","Processing_Loop"],[1952,0,2,"PerformMessageDecorationBeforeUnwind","PerformMessageDecorationBeforeUnwind"],[1953,0,2,"AssignLocal","AssignLocal"],[1954,0,2,"ExecStoreLcl","ExecStoreLcl"],[1955,0,2,"ExecStoreUpv","ExecStoreUpv"],[1956,0,2,"ExecSwap","ExecSwap"],[1957,0,2,"GetStoreValue","GetStoreValue"],[1958,0,2,"ExecClosure","ExecClosure"],[1959,0,2,"GetUpvalueSymbol","GetUpvalueSymbol"],[1960,0,2,"ExecMkTuple","ExecMkTuple"],[1961,0,2,"ExecToNum","ExecToNum"],[1962,0,2,"ExecIterUpd","ExecIterUpd"],[1963,0,2,"ExecExpTuple","ExecExpTuple"],[1964,0,2,"ExecIterPrep","ExecIterPrep"],[1965,0,2,"ExecJFor","ExecJFor"],[1966,0,2,"ExecIncr","ExecIncr"],[1967,0,2,"ExecCNot","ExecCNot"],[1968,0,2,"ExecNot","ExecNot"],[1969,0,2,"ExecBeginFn","ExecBeginFn"],[1970,0,2,"PopToBasePointer","PopToBasePointer"],[1971,0,2,"PopExecStackAndCheckVStack","PopExecStackAndCheckVStack"],[1972,0,2,"CreateArgsListForFunctionCall","CreateArgsListForFunctionCall"],[1973,0,2,"ExecArgs","ExecArgs"],[1974,0,2,"Internal_ExecCall","Internal_ExecCall"],[1975,0,2,"PerformTCO","PerformTCO"],[1976,0,2,"ExecRet","ExecRet"],[1977,0,2,"Internal_CheckForTailRequests","Internal_CheckForTailRequests"],[1978,0,2,"JumpBool","JumpBool"],[1979,0,2,"ExecShortCircuitingOperator","ExecShortCircuitingOperator"],[1980,0,2,"ExecAdd","ExecAdd"],[1981,0,2,"ExecSub","ExecSub"],[1982,0,2,"ExecMul","ExecMul"],[1983,0,2,"ExecMod","ExecMod"],[1984,0,2,"ExecDiv","ExecDiv"],[1985,0,2,"ExecPower","ExecPower"],[1986,0,2,"ExecNeg","ExecNeg"],[1987,0,2,"ExecEq","ExecEq"],[1988,0,2,"ExecLess","ExecLess"],[1989,0,2,"ExecLessEq","ExecLessEq"],[1990,0,2,"ExecLen","ExecLen"],[1991,0,2,"ExecConcat","ExecConcat"],[1992,0,2,"ExecTblInitI","ExecTblInitI"],[1993,0,2,"ExecTblInitN","ExecTblInitN"],[1994,0,2,"ExecIndexSet","ExecIndexSet"],[1995,0,2,"ExecIndex","ExecIndex"],[1855,0,2,"ClearBlockData","ClearBlockData"],[1856,0,2,"GetGenericSymbol","GetGenericSymbol"],[1857,0,2,"GetGlobalSymbol","GetGlobalSymbol"],[1858,0,2,"SetGlobalSymbol","SetGlobalSymbol"],[1859,0,2,"AssignGenericSymbol","AssignGenericSymbol"],[1860,0,2,"GetTopNonClrFunction","GetTopNonClrFunction"],[1861,0,2,"FindSymbolByName","FindSymbolByName"],[1848,0,2,"Internal_AdjustTuple","Internal_AdjustTuple"],[1849,0,2,"Internal_InvokeUnaryMetaMethod","Internal_InvokeUnaryMetaMethod"],[1850,0,2,"Internal_InvokeBinaryMetaMethod","Internal_InvokeBinaryMetaMethod"],[1851,0,2,"StackTopToArray","StackTopToArray"],[1852,0,2,"StackTopToArrayReverse","StackTopToArrayReverse"],[1900,0,3,"Constants","Constants"],[1901,0,1,"DUMP_CHUNK_MAGIC","DUMP_CHUNK_MAGIC"],[1902,0,1,"DUMP_CHUNK_VERSION","DUMP_CHUNK_VERSION"],[1947,0,1,"YIELD_SPECIAL_TRAP","YIELD_SPECIAL_TRAP"],[1876,0,3,"Properties","Properties"],[1877,0,4,"State","State"],[1878,0,4,"AssociatedCoroutine","AssociatedCoroutine"],[1886,0,4,"DebuggerEnabled","DebuggerEnabled"]]);