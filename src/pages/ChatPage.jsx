import React, { useState } from 'react';
import { Search, ShoppingCart, Send } from 'lucide-react';

const initialChats = [
  {
    id: 1,
    name: 'Intan',
    lastMessage: 'Selamat datang di toko ka...',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Rina',
    lastMessage: 'masih kak, mau COD kapan?',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Albert',
    lastMessage: 'Masih berminat kak?',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Melisa',
    lastMessage: '40rb kak, bisa nego dikit',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Bagas',
    lastMessage: 'Masih kak',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Reno',
    lastMessage: 'Maaf ya kak, barangnya sudah terjual',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
  },
];

const initialMessages = {
  1: [
    { id: 101, sender: 'me', text: 'Halo ka, saya mau nanya nih sepatu yang cream masi ada ga ya ka?' },
    { id: 102, sender: 'other', text: 'Selamat datang di toko kami! untuk barang yang kakak tanya, masih ada ya ka, bisa langsung di CO aja ka...' },
    { id: 103, sender: 'me', text: 'saya mau nawar, bisa ga ya ka?' },
  ],
  2:[
    { id: 201, sender: 'me', text: 'Kak sepatu ini masih ada ga ya?, kalo ada bisa di COD?' },
    { id: 202, sender: 'other', text: 'masih kak, mau COD kapan?' },
  ],
  3:[
    { id: 301, sender: 'me', text: 'Kak ini net nya berfapa ya?' },
    { id: 302, sender: 'other', text: '14jt kak' },
    { id: 303, sender: 'other', text: 'Masih berminat kak?' },
  ],
  4:[
    { id: 401, sender: 'me', text: 'Kak ini harganya berapa ya?' },
    { id: 402, sender: 'other', text: '40rb kak, bisa nego dikit' },
  ],
  5:[
    { id: 501, sender: 'me', text: 'Barangnya masih ada kak?' },
    { id: 502, sender: 'other', text: 'Masih kak' },
  ],
  6:[
    { id: 601, sender: 'me', text: 'Kak ini barangnya masih ada ga ya?' },
    { id: 602, sender: 'other', text: 'Maaf ya kak, barangnya sudah terjual' },
  ]
};

export default function ChatPage() {
  const [chats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const activeChat = chats.find((c) => c.id === activeChatId);
  const currentMessages = messages[activeChatId] || [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: 'me',
        text: inputText,
      };
      setMessages((prev) => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), newMessage],
      }));
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden font-sans">
      {/* TOP NAVBAR */}
      <header className="h-20 border-b border-gray-200 px-8 flex items-center justify-between bg-white shrink-0">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-black italic text-red-600 tracking-tight leading-none">
            Tel<br />
            <span className="not-italic text-red-500 font-bold">Used</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-12">
          <div className="relative flex items-center">
            <Search className="absolute left-5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search our catalog.."
              className="w-full pl-12 pr-6 py-3 bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:border-red-500 shadow-sm"
            />
          </div>
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center space-x-6">
          <button className="text-red-500 hover:text-red-600 transition-colors">
            <ShoppingCart className="w-7 h-7 fill-current" />
          </button>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
            <img
              src="sample-avatar.png"
              alt="Profile"
              className="w-full h-full object-cover bg-red-400"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR (CHAT LIST) */}
        <aside className="w-80 border-r border-gray-200 bg-white flex flex-col overflow-y-auto shrink-0">
          <div className="divide-y divide-gray-100">
            {chats.map((chat) => {
              const isActive = chat.id === activeChatId;
              return (
                <div
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${
                    isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="font-bold text-gray-900 text-sm truncate">{chat.name}</h3>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{chat.lastMessage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* RIGHT CHAT AREA */}
        <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden relative">
          {/* Chat Header Banner */}
          <div className="bg-[#E53935] px-6 py-3.5 text-white font-semibold text-lg text-left shadow-sm shrink-0">
            {activeChat?.name}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {currentMessages.map((msg) => {
              const isMe = msg.sender === 'me';
              return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-md px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      isMe
                        ? 'bg-[#A83232] text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input Footer */}
          <div className="p-6 bg-gray-50 shrink-0">
            <form
              onSubmit={handleSendMessage}
              className="bg-white rounded-full shadow-sm border border-gray-200 px-6 py-3 flex items-center gap-4 max-w-5xl mx-auto"
            >
              <input
                type="text"
                placeholder="Tulis pesan..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="text-red-500 hover:text-red-600 transition-colors p-1"
              >
                <Send className="w-5 h-5 rotate-45 text-[#E53935]" />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}