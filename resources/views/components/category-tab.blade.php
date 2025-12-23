<ul class="flex justify-center flex-wrap text-sm font-medium text-center text-body">
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-2.5 text-white bg-brand rounded-base active" aria-current="page">All</a>
    </li>
    @foreach ($categories as $category)
        <li class="me-2">
            <a href="#"
                class="inline-block px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft">{{$category->name}}</a>
        </li>
    @endforeach
</ul>
