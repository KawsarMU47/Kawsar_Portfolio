<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navbar</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-200">
  <!-- Navbar -->
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Brand and Image -->
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center">
            <img class="h-8 w-8" src="your-logo.png" alt="Logo">
            <span class="ml-2 font-semibold text-lg">Your Brand</span>
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex sm:hidden">
          <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path fill-rule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
        
        <!-- Navigation Items -->
        <div class="hidden sm:flex sm:items-center sm:ml-6">
          <a href="#" class="px-4 py-2 text-gray-700 hover:text-gray-900">About</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:text-gray-900">Certificates</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:text-gray-900">Projects</a>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-4">
        <a href="#" class="block px-4 py-2 text-gray-700 hover:text-gray-900">About</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:text-gray-900">Certificates</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:text-gray-900">Projects</a>
      </div>
    </div>
  </nav>
  
  <!-- Rest of the page content goes here -->
  
</body>

</html>
