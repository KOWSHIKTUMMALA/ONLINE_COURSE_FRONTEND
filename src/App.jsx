import './App.css'
import LoginForm from './pages/Login/Loginform'
import AccountPage from './pages/Account/AccountPage'
import { Route, Routes } from 'react-router-dom'
import Signupform from './pages/Signup/Signupform'
import Homepage from './pages/Home/Home'

import CCourse from './pages/CLanguage/Cmain'
import Introduction from './pages/CLanguage/Introduction'
import Identifier from './pages/CLanguage/Identifiersinc'
import Keywords from './pages/CLanguage/Keywordsinc'
import Variables from './pages/CLanguage/Variables'
import Datatypes from './pages/CLanguage/Datatypes'
import Inputoutput from './pages/CLanguage/Inputoutput'
import Operators from './pages/CLanguage/Operators'
import Conditional from './pages/CLanguage/Conditional'
import Loops from './pages/CLanguage/Loops'
import Function from './pages/CLanguage/Functions'
import Parameter from './pages/CLanguage/ParameterPassingTechniques'
import Mainfun from './pages/CLanguage/MainFunc'
import Recursion from './pages/CLanguage/Recursion'
import Inline from './pages/CLanguage/InlineFun'
import Nestedfun from './pages/CLanguage/Nestedfun'
import Arrays from './pages/CLanguage/Arrays'
import Pointers from './pages/CLanguage/Pointers'
import Strings from './pages/CLanguage/Strings'
import Structure from './pages/CLanguage/Structures'
import Union from './pages/CLanguage/Union'
import Enum from './pages/CLanguage/Enum'
import Layout from './pages/CLanguage/Memorylayout'
import Memoryallocation from './pages/CLanguage/Memoryallocation'
import Leaks from './pages/CLanguage/Memoryleaks'
import Linked from './pages/CLanguage/Linked'
import Stack from './pages/CLanguage/Stack'
import Queue from './pages/CLanguage/Queue'
import Hash from './pages/CLanguage/Hash'
import Binarytree from './pages/CLanguage/Binarytree'
import Heap from './pages/CLanguage/Heap'
import Graphs from './pages/CLanguage/Graphs'

import Python from './pages/Python/Pmain'
import Pintroduction from './pages/Python/Pintroduction'
import Pinput from './pages/Python/Pinput'
import Pvariable from './pages/Python/Pvariable'
import Poperator from './pages/Python/Poperator'
import Pkeyword from './pages/Python/Pkeyword'
import Pdata from './pages/Python/Pdatatype'
import Pcond from './pages/Python/Pconditional'
import Ploop from './pages/Python/Ploop'
import PDef from './pages/Python/PDef'
import PUse from './pages/Python/PUse'
import Preturn from './pages/Python/Preturn'
import PGlobal from './pages/Python/PGlobal'
import Precursion from './pages/Python/Precursion'
import Pargs from './pages/Python/Pargs'
import Pself from './pages/Python/Pself'
import Pfirst from './pages/Python/Pfirst'
import Plambda from './pages/Python/Plambda'
import Pmap from './pages/Python/Pmap'
import Pinner from './pages/Python/Pinner'
import Pdeco from './pages/Python/PDeco'
import Pstring from './pages/Python/Pstring'
import Plist from './pages/Python/Plist'
import Ptuple from './pages/Python/Ptuple'
import Pdict from './pages/Python/Pdict'
import Pset from './pages/Python/Pset'
import Parray from './pages/Python/Parray'
import Pcom from './pages/Python/Pcom'


function App() {

  return (
    <>
      <div>
        <Routes>

          <Route path='/' element={<LoginForm/>}/>
          <Route path='/Sign' element={<Signupform/>}/>
          <Route path='/Home' element={<Homepage/>}/>
          <Route path="/account" element={<AccountPage />}/>

          <Route path='/CCourse' element={<CCourse/>}/>
          <Route path='/Introduction' element={<Introduction />} />
          <Route path='/Identifier' element={<Identifier />} />
          <Route path='/Keywords' element={<Keywords />} />
          <Route path='/Variables' element={<Variables />} />
          <Route path='/Datatypes' element={<Datatypes />} />
          <Route path='/Inputoutput' element={<Inputoutput />} />
          <Route path='/Operators' element={<Operators />} />
          <Route path='/Conditional' element={<Conditional />} />
          <Route path='/Loops' element={<Loops />} />
          <Route path='/Function' element={<Function/>}/>
          <Route path='/Parameter' element={<Parameter/>}/>
          <Route path='/MainFun' element={<Mainfun/>}/>
          <Route path='/Recursion' element={<Recursion/>}/>
          <Route path='/Inline' element={<Inline/>}/>
          <Route path='/NestedFun' element={<Nestedfun/>}/>
          <Route path='/Array' element={<Arrays/>}/>
          <Route path='/Pointer' element={<Pointers/>}/>
          <Route path='/String' element={<Strings/>}/>
          <Route path='/Structure' element={<Structure/>}/>
          <Route path='/Union' element={<Union/>}/>
          <Route path='/Enum' element={<Enum/>}/>
          <Route path='/Layout' element={<Layout/>}/>
          <Route path='/Allocate' element={<Memoryallocation/>}/>
          <Route path='/Leak' element={<Leaks/>}/>

          <Route path='/Linked' element={<Linked/>}/>
          <Route path='/Stack' element={<Stack/>}/>
          <Route path='/Queue' element={<Queue/>}/>
          <Route path='/Hash' element={<Hash/>}/>
          <Route path='/Binarytree' element={<Binarytree/>}/>
          <Route path='/Heap' element={<Heap/>}/>
          <Route path='/Graph' element={<Graphs/>}/>


        <Route path='/Python' element={<Python/>}/>
        <Route path='/Pintroduction' element={<Pintroduction/>}/>
        <Route path='/PInput' element={<Pinput/>}/>
        <Route path='/Pvariable' element={<Pvariable/>}/>
        <Route path='/Poperator' element={<Poperator/>}/>
        <Route path='/Pkeyword' element={<Pkeyword/>}/>
        <Route path='/Pdatatype' element={<Pdata/>}/>
        <Route path='/Pconditional' element={<Pcond/>}/>
        <Route path='/Ploop' element={<Ploop/>}/>
        <Route path='/PDef' element={<PDef/>}/>
        <Route path='/PUse' element={<PUse/>}/>
        <Route path='/Preturn' element={<Preturn/>}/>
        <Route path='/Pglobal' element={<PGlobal/>}/>
        <Route path='/Precursion' element={<Precursion/>}/>
        <Route path='/Pargs' element={<Pargs/>}/>
        <Route path='/Pself' element={<Pself/>}/>
        <Route path='/Pfirst' element={<Pfirst/>}/>
        <Route path='/Plambda' element={<Plambda/>}/>
        <Route path='/Pmap' element={<Pmap/>}/>
        <Route path='/Pinner' element={<Pinner/>}/>
        <Route path='/Pdeco' element={<Pdeco/>}/>
        <Route path='/Pstring' element={<Pstring/>}/>
        <Route path='/Plist' element={<Plist/>}/>
        <Route path='/Ptuple' element={<Ptuple/>}/>
        <Route path='/Pdict' element={<Pdict/>}/>
        <Route path='/Pset' element={<Pset/>}/>
        <Route path='/Parray' element={<Parray/>}/>
        <Route path='/Pcom' element={<Pcom/>}/>





        </Routes>
        
        </div>
    </>
  )
}

export default App
