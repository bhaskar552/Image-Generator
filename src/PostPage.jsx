import React, { useState } from 'react';
import { toPng } from 'html-to-image';
import logo from './assets/logo.png';
import DateSelector from './DateSelector';
import { FaSun, FaMoon } from 'react-icons/fa';

const PostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [ogImageUrl, setOgImageUrl] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [darkMode, setDarkMode] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const objectURL = URL.createObjectURL(file);
        setImage(objectURL);
      } catch (error) {
        console.error('Error creating object URL:', error); 
      }
    } else {
      console.warn('No file selected'); 
    }
  };

  const generateOgImage = async (e) => {
    e.preventDefault();
    const node = document.getElementById('post');
    try {
      const dataUrl = await toPng(node);
      setOgImageUrl(dataUrl);
      document.querySelector('meta[property="og:image"]').setAttribute('content', dataUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'og-image.png';
    link.href = ogImageUrl;
    link.click();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dynamic Post Page with OG Image Generation</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <form onSubmit={generateOgImage} className="space-y-6">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
                required
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
                rows="4"
                required
              />
              <div>
                <label className="block mb-2 font-semibold">Upload Image</label>
                <input
                  type="file"
                  onChange={handleImageUpload} 
                  className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-semibold">Background Color</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-10 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Border Color</label>
                  <input
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-full h-10 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Text Color</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-10 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Font Family</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className={`w-full p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
                  >
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="Times New Roman, Times, serif">Times New Roman</option>
                    <option value="Courier New, Courier, monospace">Courier New</option>
                    <option value="Verdana, sans-serif">Verdana</option>
                  </select>
                </div>
              </div>
              <DateSelector date={date} setDate={setDate} darkMode={darkMode} />
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Generate OG Image
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div>
  <h2 className="text-2xl font-bold mb-4">Preview</h2>
  <div
    id="post"
    className="p-6 rounded-lg shadow-lg"
    style={{
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: '8px',
      borderStyle: 'solid',
      color: textColor,
      fontFamily: fontFamily,
      width: '600px', 
      minHeight: '400px', 
    }}
  >
    <div className="flex items-center mb-4">
      <img src={logo} alt="Logo" className="rounded-full w-16 h-16 mr-4" />
      <div>
        <h1 className="text-xl font-bold">{title || 'Generated Title'}</h1>
        <p className="text-sm opacity-75">{date}</p>
      </div>
    </div>
    <p className="mb-4">
      {content
        ? content.length > 100
          ? `${content.substring(0, 100)}...`
          : content
        : 'Generated content will appear here.'}
    </p>
    {image && (
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-contain"
        />
      </div>
    )}
  </div>

            {ogImageUrl && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-2">Generated OG Image:</h2>
                <img src={ogImageUrl} alt="OG Image" className="rounded-lg shadow-lg" />
                <button
                  onClick={downloadImage}
                  className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Download Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
