<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:120',
            'image1' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:120',
            'image2' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:120',
            'image3' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:120',
        ];
    }
}
