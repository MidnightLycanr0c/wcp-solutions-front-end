<script>
    

    const ClientName = "Name";
    const Address = "123 Example ST, Sacramento, CA 95822";
    const Contact = "Contact Name";
    const Phone = "(123) 456-7890";
    const Email = "contact@gmail.com";
    const CompanySize = "medium";
    const Industry = "Medicine";
    const Sales = "Pending";
    const Comments = "Anything worth of note";
    // Function to populate the fields
    function getClientInfo() {
        document.getElementById('client-name').textContent = ClientName;
        document.getElementById('address').textContent = Address;
        document.getElementById('contact').textContent = Contact;
        document.getElementById('phone').textContent = Phone;
        document.getElementById('email').textContent = Email;
        document.getElementById('company-size').textContent = CompanySize;
        document.getElementById('industry').textContent = Industry;
        document.getElementById('sales').textContent = Sales;
        document.getElementById('comments').textContent = Comments;
    }

    // Call the function to populate the data on page load
    window.onload = getClientInfo;
</script>
<template>
    <div class="w-full max-w-7xl p-8">
        <h1 class="text-3xl font-bold text-left mb-6">
            <button class="bg-clear text-gray-500 py-2 px-4 rounded border border-gray-500 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" type="button">
                Return
            </button>
            <span id="client-name" class="ml-6">Client Name</span>
        </h1> 
    </div>

    <div class="w-full max-w-7xl bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-left mb-3">
            Address: <span id="address" class="font-normal"></span>
            <br>
            Contact: <span id="contact" class="font-normal"></span>
            <br>
            Phone: <span id="phone" class="font-normal"></span>
            <br>
            Email: <span id="email" class="font-normal"></span>
            <br>
            Company Size: <span id="company-size" class="font-normal"></span>
            <br>
            Industry: <span id="industry" class="font-normal"></span>
            <br>
            Sales Status: <span id="sales" class="font-normal"></span>
        </h2>
        <h3 class="text-2xl font-bold text-left mb-3">
            Additional Notes: 
            <br>
            <span id="comments" class="font-normal"></span>
        </h3>
        
            <button class="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" type="button">
                Save Changes
            </button>
            <button class="bg-yellow-500 text-black py-2 px-4 rounded ml-6 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" type="button">
                Edit
            </button>
        
    
    </div>
</template>
