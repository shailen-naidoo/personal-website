const html = require('html-template-tag')

const page = () => html`
<h1 class="home-header"> Open-source, <span class="home-header-indent">JavaScript Developer</span> </h1>
<p class="lead"> Hello, I'm <strong>Shailen Naidoo</strong> — an open-source enthusiast, JavaScript developer,
  speaker and tech community organiser. I am currently a Software Engineer at <a
    href="https://lumkani.com">Lumkani</a>, an insure-tech company that builds network connected fire alarms for
  townships. </p>
<article class="home-section">
  <h2>My passions</h2>
  <p> I am fortunate enough to have two passions, I have been playing guitar for close to 10 years and programming
    for the last 4 - 5 years. My focus is to make the Web more accessible to the undeserved communities in South
    Africa. </p>
  <p></p>
  <h2>Community</h2>
  <p>Giving back to the dev community is very important to me.</p>
  <p>I am the co-organizer of Vue.js South Africa which was started back in December 2018, we typically have 30+
    attendees to the meetups.</p>
  <p> In addition to organising community events I also speak at conferences and meetups and have run a number of
    workshops. These include:
  <ul>
    <li> <a href="https://linuxconf.co.za/">LinuxConf 2019</a> </li>
    <li> <a href="https://www.meetup.com/DeveloperUG/">The Developer User Group</a> </li>
    <li> <a href="https://www.cmsafricasummit.org/">CMS Africa Summit 2019</a> </li>
    <li> <a href="https://www.meetup.com/cape-town-js/">Cape Town JavaScript</a> </li>
    <li> <a href="https://vuejscapetown.netlify.com/">Vue.js in Cape Town</a> </li>
  </ul>
  </p>
  <p>I am a regular at the <a href="https://www.meetup.com/Codebridge/events/bznrhryznbfb/">Codebridge Community
      Evening</a> - a collaborative civic tech meetup - where I am part of a team of designers, developers, data
    scientists and journalists working on multiple projects aimed at helping improve the lives of South Africans</p>
  <h3>Find me elsewhere</h3>
  <p> <a class="inline-link" href="https://github.com/ShailenNaidoo">Github</a>
</article>
`

module.exports = {
  page
}