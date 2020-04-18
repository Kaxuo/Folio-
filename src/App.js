import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import Profile from './components/Profile'
import Contact from './components/Contact'
import scrollToComponent from 'react-scroll-to-component';

class App extends React.Component {

render (){
  return (
    <>
      <Navbar 
      scrollMain={() => scrollToComponent(this.Main, { offset: 0, align: 'top', duration: 500})}
      scrollProjects={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 500})}
      scrollProfile={() => scrollToComponent(this.Profile, { offset: 0, align: 'top', duration: 500})}
      scrollContact={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 500})}
      />
      <section ref={(section) => { this.Main = section; }} > <Hero /></section>
      <section ref={(section) => { this.Projects = section; }} > <Projects /></section>
      <section ref={(section) => { this.Profile = section; }} > <Profile /></section>
      <section ref={(section) => { this.Contact = section; }} > <Contact /></section>
    </>
  );
}
}

export default App;
