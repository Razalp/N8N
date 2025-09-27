"use client"

import { useState, useRef, useEffect } from "react"
import { Send, X, Bot, User, Sparkles, MessageCircle } from "lucide-react"
import Logo from '../../assets/ai.png'

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm your AI assistant. How can I help you today?", isAi: true },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const simulateAiResponse = (userMessage) => {
    const responses = [
      "That's a great question! Let me think about that for you.",
      "I understand what you're asking. Here's my perspective on that...",
      "Thanks for sharing that with me! I'd be happy to help.",
      "That's interesting! Let me provide you with some insights.",
      "I appreciate you asking! Here's what I think about that topic.",
      "Great point! I can definitely help you with that.",
      "I see what you mean. Let me break that down for you.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage = {
      id: Date.now(),
      text: inputText,
      isAi: false,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: simulateAiResponse(inputText),
        isAi: true,
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 h-[500px] bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-white/10">
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 text-white flex items-center justify-between border-b border-gray-800/50">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img 
                      src={Logo} 
                      alt="AI Assistant" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-cyan-400">Online & Ready</p>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="hover:bg-white/10 rounded-full p-2 transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isAi ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`flex items-start space-x-3 max-w-[85%] ${message.isAi ? "" : "flex-row-reverse space-x-reverse"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isAi
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5"
                          : "bg-gradient-to-r from-blue-500 to-purple-600"
                      }`}
                    >
                      {message.isAi ? (
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                          <img 
                            src={Logo} 
                            alt="AI" 
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-lg ${
                        message.isAi
                          ? "bg-gray-800/80 text-gray-100 border border-gray-700/50"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                        <img 
                          src={Logo} 
                          alt="AI" 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-800/80 rounded-2xl px-4 py-3 border border-gray-700/50">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t border-gray-800/50 bg-gray-900/50">
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-gray-400 text-sm transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  inputText.trim()
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:scale-105"
                    : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div onClick={handleClick} className="relative group cursor-pointer">
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse scale-110"></div>

        {/* Avatar Container with Logo */}
        <div className="relative bg-black rounded-full p-1 shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-gray-800/50 hover:ring-cyan-400/50">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-3 flex items-center justify-center">
            <img 
              src={Logo} 
              alt="AI Assistant" 
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Enhanced Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AiChat