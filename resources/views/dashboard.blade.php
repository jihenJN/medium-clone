<x-app-layout>

    <div class="py-6">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-4 text-gray-900">
                   <x-category-tab></x-category-tab>
                </div>
            </div>

            <div class="py-6">
                @foreach ($posts as $post)
                    <div class="bg-white block flex  border border-default rounded-base shadow-xs mb-8">
                        <x-post-item :post="$post"></x-post-item>
                        <a href="#">
                            <img class="rounded-r-base object-cover w-48 h-full "
                                src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                    </div>
                @endforeach
                <div>{{ $posts->links() }}
                </div>
            </div>
        </div>





</x-app-layout>
