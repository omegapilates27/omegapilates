const menuToggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
if(menuToggle){menuToggle.addEventListener('click',()=>{const open=mobileNav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('is-open');menuToggle?.setAttribute('aria-expanded','false');}));

const dialog=document.querySelector('#booking-dialog');
const bookingForm=document.querySelector('#booking-form');
const messageStep=document.querySelector('#message-step');
const messagePreview=document.querySelector('#message-preview');
const confirmLink=document.querySelector('.confirm-booking');
const methods=document.querySelectorAll('.method');
const links=document.querySelectorAll('.booking-link');
const sessionType=document.querySelector('#session-type');
let preparedMessage='';
let selectedSession='group';

const sessionLabels={group:'Lớp nhóm / Group class — 500.000 VNĐ',private:'Cá nhân 1:1 / Private 1:1 — 1.000.000 VNĐ'};
const buildLinks={sms:message=>`sms:+84888052727?body=${encodeURIComponent(message)}`,zalo:message=>`https://zalo.me/0888052727?text=${encodeURIComponent(message)}`,whatsapp:message=>`https://wa.me/84888052727?text=${encodeURIComponent(message)}`};

function openBooking(event){
  event.preventDefault();
  openBookingForSession(event.currentTarget.dataset.session||'group');
}
function openBookingForSession(session='group'){
  selectedSession=session;
  if(sessionType) sessionType.value=selectedSession;
  bookingForm?.reset();
  if(sessionType) sessionType.value=selectedSession;
  if(messageStep) messageStep.hidden=true;
  if(bookingForm) bookingForm.hidden=false;
  dialog?.showModal();
}
links.forEach(link=>link.addEventListener('click',openBooking));
if(window.location.hash==='#booking'&&dialog){
  window.setTimeout(()=>openBookingForSession(new URLSearchParams(window.location.search).get('session')||'group'),120);
}
document.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

bookingForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(bookingForm);
  selectedSession=data.get('session');
  preparedMessage=[
    'Chào Omega, tôi muốn đặt lịch trải nghiệm / Hello Omega, I would like to book a session.',
    `Loại trải nghiệm / Session: ${sessionLabels[selectedSession]}`,
    `Tên / Name: ${data.get('name')}`,
    `Số điện thoại / Phone: ${data.get('phone')}`,
    `Thời gian mong muốn / Preferred time: ${data.get('time')}`,
    `Vấn đề cần lưu ý / Instructor notes: ${data.get('note')}`
  ].join('\n');
  messagePreview.textContent=preparedMessage;
  bookingForm.hidden=true;
  messageStep.hidden=false;
  updateChannel('sms');
});

function updateChannel(channel){
  methods.forEach(item=>{const selected=item.dataset.method===channel;item.classList.toggle('is-selected',selected);item.setAttribute('aria-checked',String(selected));});
  if(confirmLink&&preparedMessage){confirmLink.href=buildLinks[channel](preparedMessage);confirmLink.target=channel==='sms'?'_self':'_blank';confirmLink.rel='noreferrer';}
}
methods.forEach(method=>method.addEventListener('click',()=>updateChannel(method.dataset.method)));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
document.querySelectorAll('.section,.price-card,.program-list article').forEach(element=>{element.classList.add('reveal');observer.observe(element);});
