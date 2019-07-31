@extends('layouts.frontend.master')
@section('content')
<section class="page-section" STYLE='DISPLAY:NONE;'>
    <span id="Pagebody_lblContent"></span>
</section>
<br />
<div class="container div-height">
    <div class="details-fonts body">
        <?php echo html_entity_decode($page->description);?>
    </div>
</div>
@endsection